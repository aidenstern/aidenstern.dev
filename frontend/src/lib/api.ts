export function getStrapiURL(path = '') {
  return `${process.env.API_URL}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export async function getPreviewPostBySlug(slug: string) {
  const data = await fetchAPI(`/articles?slug=${slug}`);
  return data[0];
}
