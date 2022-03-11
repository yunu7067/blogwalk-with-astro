// @ts-check

/** @type {import('@types').BlogConfigType} */
const blogConfig = {
  baseurl: 'http://example.com',
  title: 'new blog',
  subtitle: '새로운 블로그',
  avatar: {
    enabled: false,
    src: 'img/avatar.png',
  },
  social: [
    {identifier: 'github', name: 'yunu7067', url: 'https://github.com/yunu7067'},
    {identifier: 'twitter', name: 'sdaf', url: 'https://github.com/yunu7067'},
    {identifier: 'linkedin', name: 'sdaf', url: 'https://github.com/yunu7067'},
  ],
};

module.exports = blogConfig;
