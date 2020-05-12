export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5ebb2c17938b7bf9293764a1',
                  title: 'Sanity Studio',
                  name: 'dotan-me-sapper-studio',
                  apiId: '53ee4c8c-623c-4920-9c8a-6a9c580a3283'
                },
                {
                  buildHookId: '5ebb2c17d4d5820c10ad0b60',
                  title: 'Blog Website',
                  name: 'dotan-me-sapper',
                  apiId: '9f6c1b3f-ddde-4b4f-9d7c-a14f1966bfec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thezenvan/dotan-me-sapper',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dotan-me-sapper.netlify.app', category: 'apps'}
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
