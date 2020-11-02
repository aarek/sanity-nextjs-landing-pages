export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f9fcd478d2bebb8379d7a0b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zx7kccsk',
                  apiId: '60b14197-e75d-496d-b5c4-1ed90ec13b26'
                },
                {
                  buildHookId: '5f9fcd477b9955af7ae36851',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y1c4hemn',
                  apiId: 'ac794cfb-6ed8-4f83-8966-2c8d35ac277e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aarek/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y1c4hemn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
