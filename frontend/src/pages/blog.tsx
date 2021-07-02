import React from 'react';

import Link from 'next/link';

import Section from 'src/components/section';
import Main from 'src/layout/main';
import { fetchAPI } from 'src/lib/api';

type BlogProps = {
  articles: any;
};

export const Blog = ({ articles }: BlogProps) => {
  return (
    <Main>
      <Section title="All Blog Posts">
        {articles.map((article: any) => (
          <div key={article.slug} className="mb-6">
            <h3 className="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
              <Link href={`/article/${article.slug}`}>{article.title}</Link>
            </h3>
            <p className="text-md text-gray-600 font-light">
              {article.description}
            </p>
          </div>
        ))}
      </Section>
    </Main>
  );
};

export async function getStaticProps() {
  const articles = await fetchAPI('/articles');

  return {
    props: { articles },
    revalidate: 1,
  };
}

export default Blog;
