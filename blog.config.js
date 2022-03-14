// @ts-check

/** @type {import('@types').BlogConfigType} */
const blogConfig = {
  baseurl: 'http://example.com/',
  title: 'new blog',
  subtitle: '새로운 블로그',
  locale: {
    languageCode: 'ko-KR',
  },
  avatar: {
    enabled: false,
    src: 'img/avatar.png',
  },
  social: [
    {identifier: 'github', name: 'yunu7067', url: 'https://github.com/yunu7067'},
    {identifier: 'twitter', name: 'sdaf', url: 'https://github.com/yunu7067'},
    {identifier: 'linkedin', name: 'sdaf', url: 'https://github.com/yunu7067'},
  ],
  theme: 'auto',
  post: {
    math: true,
    mermaid: true,
    readingTime: false,
    toc: false,
    license: {
      enable: false,
      default: '',
    },
  },
  comments: {
    enabled: false,
    provider: 'giscus',
    giscus: {
      repo: 'yunu7067/yunu7067.github.io',
      repoId: 'MDEwOlJlcG9zaXRvcnkzNTMzNjU1MjQ=',
      category: 'giscus',
      categoryId: 'DIC_kwDOFQ_uFM4CADJ2',
      mapping: 'pathname',
      reactionsEnabled: '1',
      emitMetadata: '0',
      lightTheme: 'light',
      darkTheme: 'dark',
    },
  },
};

module.exports = blogConfig;
