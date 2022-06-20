import {readdirSync, readFileSync} from 'fs';
import matter from 'gray-matter';
import {join} from 'path';

type Items = {[key: string]: string};
const PAGE_SIZE = 5;
const SOURCE_DIR = join(process.cwd(), 'posts');
const SLUGS = readdirSync(SOURCE_DIR);

export const getPostByDir = (postDir: string) => {
  const postPath = join(SOURCE_DIR, postDir, `index.md`);
  const fileContents = readFileSync(postPath, 'utf8');
  const {data, content} = matter(fileContents);

  return {
    slug: postDir,
    meta: data,
    content,
  };
};

export function getAllSlugs() {
  return SLUGS;
}

export function getAllPosts() {
  const posts = SLUGS.map(dir => getPostByDir(dir))
    .filter(post => post !== undefined)
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}

export const getPagination = () => {
  const postLength = getAllPosts().length;
  return Array.from({length: Math.ceil(postLength / PAGE_SIZE)}).map((_, i) => i + 1);
};
export const getPostsByPagination = (pageNum: string) => {
  const posts = getAllPosts();
  let num = Number(pageNum) - 1;
  if (num < 0) num = 0;
  const start = PAGE_SIZE * num;
  const end = PAGE_SIZE * (num + 1);

  return posts.slice(start, end);
};

// export const postDirs = readdirSync(SOURCE_DIR);

// export const getPostByDir = (postDir: string) => {
//   const postPath = join(SOURCE_DIR, postDir, `index.md`);
//   const fileContents = readFileSync(postPath, 'utf8');
//   const {data, content} = matter(fileContents);

//   return {meta: data, content};
// };
// /** 날짜순으로 정렬된 Post 배열 */
// let postArray: unknown[] = [];
// /** Slug로 검색 가능한 Post 객체 */
// const postMap: {[key: string]: unknown} = {};

// postArray = postDirs.map(postDir => {
//   const post = getPostByDir(postDir);
//   postMap[postDir] = post;

//   return post;
// });
// postArray = (postArray.filter(post => post !== undefined) as Items[]).sort((post1: Items, post2: Items) =>
//   post1.date > post2.date ? -1 : 1,
// );

// // console.log({postsDirectory, postDirs});

// /************
// /***********
// /***********
// /**************** */

// export const postsDirectory = join(process.cwd(), 'posts');
// function getPostDirs() {
//   return readdirSync(postsDirectory);
// }

// function getAllPostsData(postDirs: string[]) {
//   return postDirs.map(postDir => getPostByDirectory(postDir));
// }

// export function getPostBySlug(slug: string, fields: string[] = []) {
//   const dirs = getPostDirs();
//   const posts = getAllPostsData(dirs);
//   let findPost = posts.find(post => post.meta.slug === slug);
//   if (findPost === undefined) {
//     const findDir = dirs.find(dir => dir === slug);
//     if (findDir !== undefined) {
//       findPost = getPostByDirectory(findDir);
//     }
//   }

//   if (findPost === undefined) {
//     return undefined;
//   }

//   // console.log({slug});

//   const {meta, content} = findPost;
//   const items: Items = {};

//   fields.forEach(field => {
//     if (field === 'slug') {
//       items[field] = slug;
//     }
//     if (field === 'content') {
//       items[field] = content;
//     }

//     if (typeof meta[field] !== 'undefined') {
//       items[field] = meta[field];
//     }
//   });

//   // console.debug(data);

//   return items;
// }

// export function getAllPosts(fields: string[] = []): Items[] {
//   const slugs = getPostDirs();
//   const posts = (slugs.map(slug => getPostBySlug(slug, fields)).filter(post => post !== undefined) as Items[]).sort(
//     (post1: Items, post2: Items) => (post1.date > post2.date ? -1 : 1),
//   );

//   return posts;
// }

// export function getAllTags() {
//   const posts = getAllPosts(['tags']);
//   return posts
//     .map(post => post?.tags)
//     .flat()
//     .filter(v => v !== undefined);
// }
// export function getPostsByTag(tag: string, fields: string[] = []) {
//   const posts = getAllPosts([...fields, 'tags']);
//   return posts.filter(post => post?.tags?.includes(tag));
// }
