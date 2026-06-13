/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'StoneShaw 的博客',
  author: 'StoneShaw',
  headerTitle: 'StoneShaw',
  description: '记录技术、生活与思考',
  language: 'zh-cn',
  theme: 'system',
  siteUrl: 'https://blog-steel-three-58.vercel.app',
  siteRepo: 'https://github.com/StoneSho/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: '2713141083@qq.com',
  github: 'https://github.com/StoneSho',
  locale: 'zh-CN',
  stickyNav: true,
  analytics: {},
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'zh-CN',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
