import React from 'react';

import Section from 'src/components/section';
import SummaryItem from 'src/components/summary-item';
import Main from 'src/layout/main';
import { indexQuery } from 'src/lib/queries';
import sanityClient from 'src/lib/sanity';

type BlogProps = {
  articles: any;
  preview: any;
};

export const Blog = ({ articles, preview }: BlogProps) => {
  if (preview) {
    console.log(preview);
  }
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

export async function getStaticProps({ preview = false }) {
  const articles = await sanityClient.fetch(indexQuery);
  return {
    props: { articles, preview },
  };
}

export default Blog;
