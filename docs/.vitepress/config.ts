import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'afu',
  description: 'vitepress docs',
  lastUpdated: true,
  themeConfig: {
    siteTitle: '阿福🗣',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wokemeiyoukong' }
    ],
    nav: [{ text: 'Guide', link: '/guide/', activeMatch: '/guide/' }],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Next', link: '/guide/next/' },
            { text: 'Last', link: '/guide/last' }
          ]
        }
      ]
    },
    editLink: {
      pattern: 'https://gitee.com/wokemeiyoukong/afu-topic/docs/:path',
      text: '内容较为主观，仅供参考'
    },
    footer: {
      message: '了解后都普通',
      copyright: 'Copyright © 阿福'
    }
  }
})
