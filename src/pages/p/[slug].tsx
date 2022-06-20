import React from 'react';
import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Layout from '@com/Layout';
import {Article, Button, Label} from '@com/atoms';
import {getConfig, markdownToHtml} from '@libs';
import Commnets from '@com/organisms/Commnet';
import {useRouter} from 'next/router';
import {AlignLeftIcon, ArrowLeftIcon, BorderLeftIcon, CaretLeftIcon} from '@radix-ui/react-icons';
import {getAllSlugs, getPostBySlug} from 'src/libs/api';
import {Post} from '@types';

function Post({config, post, content}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout config={config}>
      <Head>
        <title>{post.meta.title}</title>
        <meta property='og:title' content={post.meta.title} key='title' />
        {post.meta.description && <meta name='description' content={post.meta.description} />}
      </Head>

      <section>
        {post.meta.title && <h1>{post.meta.title}</h1>}
        {post.meta.date && <p>{post.meta.date}</p>}
        {(post.meta.tags as unknown as string[])?.map(tag => (
          <Label key={tag} href={`/t/${tag}`}>
            {tag}
          </Label>
        ))}
        <Article dangerouslySetInnerHTML={{__html: content}} />
      </section>
      <Commnets {...config.comments} />
    </Layout>
  );
}

async function getStaticProps({params}: GetStaticPropsContext<{slug: string}>) {
  const config = await getConfig();
  const slug = params!.slug;

  // const post = getPostBySlug(slug, ['title', 'date', 'slug', 'tags', 'content', 'img']);
  const post = getPostBySlug(slug) as Post;
  const content = await markdownToHtml(post.content || '', post!.slug, config.post);

  return {
    props: {
      config: {...config},
      post: {...post},
      content: content,
    },
  };
}

async function getStaticPaths() {
  const slugs = getAllSlugs();
  const paths = slugs.map(slug => ({
    params: {slug},
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Post;
export {getStaticProps, getStaticPaths};
