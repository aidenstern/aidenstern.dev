// schemas/header.js
export default {
  name: "header",
  title: " Header",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Header title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Header subtitle",
      type: "string",
    },
    {
      name: "logo",
      title: "Header logo",
      type: "image",
    },
    {
      name: "headerLinks",
      title: "Header Links",
      type: "array",
      of: [
        {
          name: "link",
          title: "link",
          type: "document",
          fields: [
            {
              name: "href",
              type: "url",
              title: "URL",
            },
            {
              name: "text",
              type: "string",
              title: "text",
            },
          ],
        },
      ],
    },
  ],
};
