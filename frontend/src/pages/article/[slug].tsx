import React from 'react';

import DateFormatter from 'src/components/date';
import Markdown from 'src/components/markdown';
import Main from 'src/layout/main';
import { postQuery, postSlugsQuery } from 'src/lib/queries';
import sanityClient from 'src/lib/sanity';

type ArticleProps = {
  article: any;
};

const Article = ({ article }: ArticleProps) => {
  const seo = {
    title: article.title,
    description: article.description,
  };

  return (
    <Main meta={seo}>
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
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug: any) => ({
      params: { slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }: any) {
  const articles = await sanityClient.fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: { preview, article: articles[0] },
    revalidate: 1,
  };
}

export default Article;
