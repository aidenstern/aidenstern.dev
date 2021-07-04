// schemas/header.js
export default {
    name: 'header',
    title: ' Header',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: ' header title',
        type: 'string',
      },
      {
        name: 'repoURL',
        title: 'Repo URL',
        type: 'slug',
      },
    ],
  };