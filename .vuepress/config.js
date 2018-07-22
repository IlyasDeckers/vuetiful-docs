module.exports = {
  title: 'Vuetiful documentation',
  description: 'Vuetiful documentation',
  base: '/vuetiful-docs/',
  themeConfig: {
    sidebar: [
      ['/', 'Home'],
      '/docs/installation',
      {
        title: 'Essentials',
        collapsable: false,
        children: [
          '/docs/essentials/views',
          '/docs/essentials/components',
          '/docs/essentials/routing',
          '/docs/essentials/store'
        ]
      },
      {
        title: 'Components',
        collapsable: true,
        children: [
          '/docs/components/base-components',
          '/docs/components/standard-components'
        ]
      },
      {
        title: 'Plugins',
        collapsable: true,
        children: [
          '/docs/plugins/authentication',
          '/docs/plugins/pusher',
          '/docs/plugins/toastr',
          '/docs/plugins/calendar',
          '/docs/plugins/creating'
        ]
      }
      
    ],
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Reference',
        link: '/reference/'
      },
      { text: 'GitHub', link: 'https://github.com/IlyasDeckers' },
    ]
  }
}
