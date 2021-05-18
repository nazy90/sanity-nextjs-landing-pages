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
                  buildHookId: '60a408bfd1ac351080aa36d6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6639wsrh',
                  apiId: '859c5ffc-c93b-484a-ab08-7715627f4253'
                },
                {
                  buildHookId: '60a408bf701baa0f6a2edc8e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rdo4g4w7',
                  apiId: 'de830904-2c0b-49b5-921d-63a6b3f60394'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nazy90/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rdo4g4w7.netlify.app', category: 'apps'}
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
