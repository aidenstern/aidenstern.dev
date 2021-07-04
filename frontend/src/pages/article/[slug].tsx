import React from 'react';

import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import DateFormatter from 'src/components/date';
import Markdown from 'src/components/markdown';
import Main from 'src/layout/main';
import { articleQuery, articleSlugsQuery } from 'src/lib/queries';
import { usePreviewSubscription } from 'src/lib/sanity';
import { sanityClient, getClient } from 'src/lib/sanity.server';

type ArticleProps = {
  data: any;
  preview: boolean;
};

const Article = ({ data = {}, preview }: ArticleProps) => {
  const router = useRouter();

  const slug = data?.article?.slug;
  const {
    data: { article },
  } = usePreviewSubscription(articleQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  const seo = {
    title: article.title,
    description: article.description,
  };

  return (
    <Main meta={seo} preview={preview}>
      <div>
        <h1 className="mt-16 text-4xl text-gray-900 font-bold">
          {article.title}
        </h1>
        <p className="text-gray-600 font-light">
          Posted on <DateFormatter dateString={article.publishedAt} />
        </p>
      </div>
      <hr className="mt-8 max-w-150 border-t-2" />

      <div className="my-8">
        <Markdown content={article.content} />
      </div>
    </Main>
  );
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(articleSlugsQuery);
  return {
    paths: paths.map((slug: any) => ({
      params: { slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }: any) {
  const article = await getClient(preview).fetch(articleQuery, {
    slug: params.slug,
  });

  return {
    props: { data: article, preview },
    revalidate: 1,
  };
}

export default Article;
