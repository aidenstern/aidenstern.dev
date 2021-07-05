// sanity/schemas/homepage.js
export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: "title",
      title: "Home page title",
      type: "string",
      description: "What's the title of the homepage hero?",
    },
    {
      name: "description",
      title: "Home page description",
      type: "text",
      description: "What's the text of the homepage hero?",
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
                      type: "text",
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
