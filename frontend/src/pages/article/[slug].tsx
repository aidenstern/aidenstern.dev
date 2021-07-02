import React from 'react';

import Markdown from 'src/components/markdown';
import Seo from 'src/components/seo';
import Main from 'src/layout/main';

import { fetchAPI } from '../../lib/api';
import { getStrapiMedia } from '../../lib/media';

type ArticleProps = {
  article: any;
};

const Article = ({ article }: ArticleProps) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };
  return (
    <Main>
      <Seo seo={seo} />
      <div id="banner" data-src={imageUrl} data-srcset={imageUrl} data-uk-img>
        <h1 className="mt-16 text-4xl text-gray-900 font-bold">
          {article.title}
        </h1>
        <p className="text-gray-600 font-light">
          Posted on {article.published_at}
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
  const articles = await fetchAPI('/articles');
  return {
    paths: articles.map((article: any) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );

  return {
    props: { article: articles[0] },
    revalidate: 1,
  };
}

export default Article;
