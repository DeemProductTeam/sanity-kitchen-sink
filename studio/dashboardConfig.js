export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eee4a4df3b4c823010a9631',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-keh947xj',
                  apiId: '8c3a7ea9-e485-4d1e-86dc-f8ba947d4c7c'
                },
                {
                  buildHookId: '5eee4a4d7588dead1d84b81c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-92ys2rkj',
                  apiId: '905840f5-550f-4b81-8a64-b73d4e94475b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DeemProductTeam/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-92ys2rkj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
