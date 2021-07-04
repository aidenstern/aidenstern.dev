// sanity/schemas/homepage.js
export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Homepage title",
      type: "string",
      description: "What's the title of the homepage hero?",
    },
    {
      name: "subtitle",
      title: "Homepage subtitle",
      type: "string",
      description: "What's the subtitle of the homepage hero?",
    },
    {
      name: "image",
      title: "Homepage image",
      type: "image",
    },
    {
      name: "sections",
      type: "array",
      of: [
        {
          name: "section",
          title: "Section",
          type: "document",
          fields: [
            {
              name: "title",
              type: "string",
              description: "Section title",
            },
            {
              name: "summaryItems",
              type: "array",
              of: [
                {
                  name: "summaryItem",
                  title: "Summary Item",
                  type: "document",
                  fields: [
                    {
                      name: "name",
                      type: "string",
                    },
                    {
                      name: "description",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
