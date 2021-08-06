const articleFields = `
  _id,
  title,
  description,
  publishedAt,
  "slug": slug.current,
`;

export const indexQuery = `
*[_type == "article" && published == true] | order(publishedAt desc) {
  ${articleFields}
}`;

export const articleQuery = `
{
  "article": *[_type == "article" && published == true && slug.current == $slug] | order(_updatedAt desc) | [0] {
    content,
    ${articleFields}
  }
}`;

export const articleSlugsQuery = `
*[_type == "article" && published == true && defined(slug.current)][].slug.current
`;

export const articleBySlugQuery = `
*[_type == "article" && published == true && slug.current == $slug][0] {
  ${articleFields}
}
`;

export const homePageQuery = `
*[_type == "homePage"][0]
`;

export const headerQuery = `
*[_type == "header"][0]
`;
