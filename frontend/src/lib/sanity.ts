import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '3t12o89p',
  dataset: 'production',
  apiVersion: '2021-07-04', // use current UTC date - see "specifying API version"!
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;
