import React from 'react';

import Section from 'src/components/section';
import SummaryItem from 'src/components/summary-item';
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
          <SummaryItem
            key={article.slug}
            name={article.title}
            description={article.description}
            link={`/article/${article.slug}`}
            internal
          />
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
