/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const sanityClient = require('@sanity/client');

const client = sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  useCdn: process.env.NODE_ENV === 'production',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  target: 'serverless',
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  async exportPathMap(defaultPathMap) {
    const paths = await client
      .fetch('*[_type == "article" && defined(slug)].slug.current')
      .then((data) =>
        data.reduce(
          (acc, slug) => ({
            '/': { page: '/' },
            ...acc,
            [`/article/${slug}`]: { page: '/article/[slug]', query: { slug } },
          }),
          defaultPathMap
        )
      )
      .catch(console.error);
    return paths;
  },
});
