import React from 'react';

import Section from 'src/components/section';
import SummaryItem from 'src/components/summary-item';
import MainLayout from 'src/layout/main';
import { headerQuery, indexQuery } from 'src/lib/queries';
import { sanityClient } from 'src/lib/sanity.server';
import PageWithLayoutType from 'src/types/layout';

type BlogProps = {
  headerProps: any;
  articles: any;
  preview: any;
};

export const Blog = (props: BlogProps) => {
  return (
    <Section title="All Blog Posts">
      {props.articles.map((article: any) => (
        <SummaryItem
          key={article.slug}
          name={article.title}
          description={article.description}
          link={`/article/${article.slug}`}
          internal
        />
      ))}
    </Section>
  );
};

(Blog as PageWithLayoutType).layout = MainLayout;

export async function getStaticProps({ preview = false }) {
  const header = await sanityClient.fetch(headerQuery);
  const articles = await sanityClient.fetch(indexQuery);
  return {
    props: { headerProps: header, articles, preview },
  };
}

export default Blog;
