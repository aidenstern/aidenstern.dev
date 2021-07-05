/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const client = require('./src/lib/sanity.server.ts').sanityClient;

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
