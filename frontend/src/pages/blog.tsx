import React, { useContext, useEffect } from 'react';

import Section from 'src/components/section';
import SummaryItem from 'src/components/summary-item';
import { headerQuery, indexQuery } from 'src/lib/queries';
import { sanityClient } from 'src/lib/sanity.server';
import { GlobalContext } from 'src/pages/_app';

type BlogProps = {
  headerProps: any;
  articles: any;
  preview: any;
};

export const Blog = (props: BlogProps) => {
  const { setState } = useContext(GlobalContext);

  useEffect(() => {
    if (props.preview) {
      setState({ preview: true });
    }
  });

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

export async function getStaticProps({ preview = false }) {
  const header = await sanityClient.fetch(headerQuery);
  const articles = await sanityClient.fetch(indexQuery);
  return {
    props: { headerProps: header, articles, preview },
  };
}

export default Blog;
