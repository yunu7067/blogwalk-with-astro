// @ts-check

/** @type {import('./src/types').BlogConfigType} */
const blogConfig = {
  baseurl: 'https://yunu7067.github.io',
  title: 'tololo://',
  description: 'An example blog on Astro',
  locale: {
    languageCode: 'ko-KR',
  },
  avatar: {
    enabled: true,
    src: '/public/assets/profile/avatar.jpeg',
  },
  social: [
    {identifier: 'github', name: 'GitHub test', url: 'https://github.com/yunu7067/'},
    {identifier: 'facebook', name: 'Facebook test', url: 'https://github.com/yunu7067/'},
    {identifier: 'twitter', name: 'Twitter test', url: 'https://github.com/yunu7067/'},
    {identifier: 'discord', name: 'Discord test', url: 'https://github.com/yunu7067/'},
    {identifier: 'instagram', name: 'Instagram test', url: 'https://github.com/yunu7067/'},
    {identifier: 'linkedin', name: 'Linkedin test', url: 'https://github.com/yunu7067/'},
    {identifier: 'npmjs', name: 'Npmjs test', url: 'https://github.com/yunu7067/'},
    {identifier: 'youtube', name: 'Youtube test', url: 'https://github.com/yunu7067/'},
    {identifier: 'email', name: 'email test', url: 'https://github.com/yunu7067/'},
    {identifier: 'default', name: 'Default test', url: 'https://github.com/yunu7067/'},
  ],
  // theme: 'auto',
  // post: {
  //   math: true,
  //   mermaid: true,
  //   readingTime: false,
  //   toc: true,
  //   license: {
  //     enable: false,
  //     default: '',
  //   },
  // },
  // comments: {
  //   enabled: true,
  //   provider: 'giscus',
  //   giscus: {
  //     repo: 'yunu7067/yunu7067.github.io',
  //     repoId: 'MDEwOlJlcG9zaXRvcnkzNTMzNjU1MjQ=',
  //     category: 'giscus',
  //     categoryId: 'DIC_kwDOFQ_uFM4CADJ2',
  //     mapping: 'pathname',
  //     reactionsEnabled: '1',
  //     emitMetadata: '0',
  //     lightTheme: 'light',
  //     darkTheme: 'dark',
  //   },
  // },
};

// module.exports = blogConfig;
export default blogConfig;
