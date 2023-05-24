const siteMetadata = {
  title: 'Michał Grochowski portfolio',
  author: 'Michał Grochowski',
  headerTitle: 'The Prog',
  description: 'My personal portfolio & blog website',
  snippets: 'collected by me code snippets',
  language: 'en-us',
  theme: 'system', 
  siteUrl: 'https://grochowski-michal.vercel.app/',
  siteRepo: '',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpeg',
  email: 'michalgrochowski12@gmail.com',
  github: 'https://github.com/GrochowskiMichal',
  twitter: 'https://twitter.com/Th3Pr0g',
  linkedin: 'https://www.linkedin.com/in/grochowskimichal/',
  website: 'https://grochowski-michal.vercel.app/',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: 'webanblog.vercel.app', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: true, // true or false
    umamiWebsiteId: 'ca032a55-04a7-46af-b1b9-a01da4cd255e', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'Th3Pr0g',
  },
}

module.exports = siteMetadata
