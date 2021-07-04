const articleFields = `
  _id,
  title,
  date,
  description,
  "slug": slug.current,
`;

export const indexQuery = `
*[_type == "article"] | order(date desc, _updatedAt desc) {
  ${articleFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    content,
    ${articleFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${articleFields}
}
`;

export const homePageQuery = `
*[_type == "homepage"]
`;
