// schemas/header.js
export default {
    name: 'header',
    title: ' Header',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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