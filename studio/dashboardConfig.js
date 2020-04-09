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
                  buildHookId: '5e8edca4e3a5475ccc404f66',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f85jte1x',
                  apiId: '92b7cb10-7fa2-4a00-9479-8aafd52e2954'
                },
                {
                  buildHookId: '5e8edca4c226e0d2daef8f93',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kuu7y719',
                  apiId: '1d4a1a1e-ee5b-443c-9fa5-0ff81f86a9c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomasansems/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kuu7y719.netlify.com', category: 'apps'}
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
