import {PostType} from '@types';
import {readdirSync, readFileSync} from 'fs';
import matter from 'gray-matter';
import {join} from 'path';

type Items = {
  [key: string]: string;
};

const postsDirectory = join(process.cwd(), 'posts');

function getPostDirs() {
  return readdirSync(postsDirectory);
}

function getPostByDirectory(postDirectory: string) {
  const postPath = join(postsDirectory, postDirectory, `index.md`);
  const fileContents = readFileSync(postPath, 'utf8');
  const {data, content} = matter(fileContents);

  return {data, content};
}

function getAllPostsData(postDirs: string[]) {
  return postDirs.map(postDir => getPostByDirectory(postDir));
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const dirs = getPostDirs();
  const posts = getAllPostsData(dirs);
  let findPost = posts.find(post => post.data.slug === slug);
  if (findPost === undefined) {
    const findDir = dirs.find(dir => dir === slug);
    if (findDir !== undefined) {
      findPost = getPostByDirectory(findDir);
    }
  }

  if (findPost === undefined) {
    return undefined;
  }

  // console.log({slug});

  const {data, content} = findPost;
  const items: Items = {};

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  // console.debug(data);

  return items;
}

export function getAllPosts(fields: string[] = []): Items[] {
  const slugs = getPostDirs();
  const posts = (slugs.map(slug => getPostBySlug(slug, fields)).filter(post => post !== undefined) as Items[]).sort(
    (post1: Items, post2: Items) => (post1.date > post2.date ? -1 : 1),
  );

  return posts;
}

export function getAllTags() {
  const posts = getAllPosts(['tags']);
  return posts
    .map(post => post?.tags)
    .flat()
    .filter(v => v !== undefined);
}
export function getPostsByTag(tag: string, fields: string[] = []) {
  const posts = getAllPosts([...fields, 'tags']);
  return posts.filter(post => post?.tags?.includes(tag));
}
