import rss from '@astrojs/rss';
import config from '$config';

export const get = () => {
  const postImportResult = import.meta.glob('./p/**/*.{md,mdx}', {eager: true});
  const posts = Object.values(postImportResult);
  const description = config.rss
    ? config.description
    : 'If you want to using rss, change the `rss` from `false` to `true` in the blog config.';
  const items = config.rss
    ? posts
        .map(post => ({
          link: post.url,
          title: post.frontmatter.title,
          description: post.frontmatter?.description || '',
          pubDate: post.frontmatter.publishDate,
        }))
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    : [];

  return rss({
    title: config.title,
    description: description,
    site: import.meta.env.SITE,
    items: items,
  });
};
