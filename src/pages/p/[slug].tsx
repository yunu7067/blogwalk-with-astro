import React from 'react';
import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Layout from '@com/Layout';
import {Label} from '@com/atoms';
import {getConfig, markdownToHtml, getAllPosts, getPostBySlug} from '@libs';
import Commnets from '@com/organisms/Commnet';

function Post({config, post, content}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout config={config}>
      <Head>
        <title>{post.title}</title>
        <meta property='og:title' content={post.title} key='title' />
        {post.description && <meta name='description' content={post.description} />}
      </Head>

      <article>
        {post.img && <p>{post.img}</p>}
        {post.title && <p>{post.title}</p>}
        {post.date && <p>{post.date}</p>}
        {(post.tags as unknown as string[])?.map(tag => (
          <Label key={tag} href={`/t/${tag}`}>
            {tag}
          </Label>
        ))}
        <div dangerouslySetInnerHTML={{__html: content}} />
        <Commnets {...config.comments} />
      </article>
    </Layout>
  );
}

async function getStaticProps({params}: GetStaticPropsContext<{slug: string}>) {
  const config = await getConfig();
  const slug = params!.slug;

  const post = getPostBySlug(slug, ['title', 'date', 'slug', 'tags', 'content', 'img']);

  const content = await markdownToHtml(post!.content || '', '테스트', config.post);

  return {
    props: {
      config: {...config},
      post: {
        ...post,
      },

      content,
    },
  };
}

async function getStaticPaths() {
  const posts = getAllPosts(['slug']);
  const paths = posts.map(post => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Post;
export {getStaticProps, getStaticPaths};
