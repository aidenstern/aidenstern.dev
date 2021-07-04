const articleFields = `
  _id,
  title,
  date,
  description,
  publishedAt,
  "slug": slug.current,
`;

export const indexQuery = `
*[_type == "article"] | order(date desc, _updatedAt desc) {
  ${articleFields}
}`;

export const articleQuery = `
{
  "article": *[_type == "article" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    content,
    ${articleFields}
  }
}`;

export const articleSlugsQuery = `
*[_type == "article" && defined(slug.current)][].slug.current
`;

export const articleBySlugQuery = `
*[_type == "article" && slug.current == $slug][0] {
  ${articleFields}
}
`;

export const homePageQuery = `
*[_type == "homepage"]
`;
