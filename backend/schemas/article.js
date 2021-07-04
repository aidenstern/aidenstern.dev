export default {
  type: "document",
  name: "article",
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      type: "string",
      name: "description",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      type: "markdown",
      description: "A Github flavored markdown field with image uploading",
      name: "content",
    },
  ],
};
