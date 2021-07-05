import React from 'react';

import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import DateFormatter from 'src/components/date';
import Markdown from 'src/components/markdown';
import MainLayout from 'src/layout/main';
import { articleQuery, articleSlugsQuery, headerQuery } from 'src/lib/queries';
import { usePreviewSubscription } from 'src/lib/sanity';
import { sanityClient, getClient } from 'src/lib/sanity.server';
import PageWithLayoutType from 'src/types/layout';

type ArticleProps = {
  headerProps: any;
  data: any;
  preview: boolean;
};

const Article = (props: ArticleProps) => {
  const router = useRouter();
  const { data = {}, preview } = props;

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

  return (
    <>
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
    </>
  );
};

(Article as PageWithLayoutType).layout = MainLayout;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(articleSlugsQuery);
  return {
    paths: paths.map((slug: any) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }: any) {
  const header = await sanityClient.fetch(headerQuery);
  const article = await getClient(preview).fetch(articleQuery, {
    slug: params.slug,
  });

  return {
    props: { headerProps: header, data: article, preview },
    revalidate: 1,
  };
}

export default Article;
