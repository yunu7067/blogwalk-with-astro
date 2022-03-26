import React, {useEffect, useLayoutEffect, useState} from 'react';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Layout from '@com/Layout';
import {getAllPosts, getConfig, getSearchIndex} from '@libs';
import {PostType} from '@types';
import lunr from 'lunr';
import {PostList} from '@com/molecules';

interface Dict<T> {
  [key: string]: T | undefined;
}

export default function Series({config, post, indexing}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>('');
  const [posts, setPosts] = useState<PostType[]>([]);
  const index = lunr.Index.load(JSON.parse(indexing));

  useLayoutEffect(() => {
    if (router.isReady) {
      const keyword = (router.query.keyword as string) || '';
      setKeyword(keyword);
    }
  }, [router]);

  useEffect(() => {
    if (keyword.trim() !== '') {
      const result = index.search(keyword);
      // setPosts(result);
      console.log({post, index, result});

      const refs = result.map(res => res.ref);
      const finds = post.filter(p => refs.includes(p.slug));
      console.log(finds);
      setPosts(finds);
    }
  }, [keyword]);

  return (
    <Layout config={config}>
      <Head>
        <title>search:{keyword}</title>
      </Head>
      <h3>검색결과: {posts.length}건</h3>
      <PostList>
        {posts.map(post => (
          <PostList.Item key={post.slug} post={post} />
        ))}
      </PostList>
    </Layout>
  );
}

export async function getStaticProps({}) {
  const config = await getConfig();
  const posts = getAllPosts([
    'slug',
    'title',
    'description',
    'tags',
    'date',
    'img',
    'content',
  ]) as unknown as PostType[];
  const indexing = getSearchIndex(posts, 'slug', ['slug', 'title', 'description', 'tags', 'content']);

  return {
    props: {
      config: {...config},
      post: posts,
      indexing: JSON.stringify(indexing),
    },
  };
}
