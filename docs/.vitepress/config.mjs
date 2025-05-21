import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SkillUp Documentation",
  description: "Official SkillUp Global Documentation for features, backend users and API integration",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
        light: 'skillup-logo-dark.png',
        dark: 'skillup-logo-light.png'
    },
    siteTitle: false,
    lastUpdated: {
          text: 'Last updated'
      },
      externalLinkIcon: true,
      search: {
          provider: 'local'
      },
      nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
          { text: 'Development', link: '/development/', activeMatch: '/development/' }
      ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
