import React from 'react';
import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Layout from '@com/Layout';
import {Article, Button, Label} from '@com/atoms';
import {getConfig, markdownToHtml, getAllPosts, getPostBySlug} from '@libs';
import Commnets from '@com/organisms/Commnet';
import {useRouter} from 'next/router';
import {AlignLeftIcon, ArrowLeftIcon, BorderLeftIcon, CaretLeftIcon} from '@radix-ui/react-icons';

function Post({config, post, content}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {back} = useRouter();

  return (
    <Layout config={config}>
      <Head>
        <title>{post.title}</title>
        <meta property='og:title' content={post.title} key='title' />
        {post.description && <meta name='description' content={post.description} />}
      </Head>
      <Button onClick={back} content='icontext'>
        <ArrowLeftIcon /> back
      </Button>
      <section>
        {post.img && <p>{post.img}</p>}
        {post.title && <p>{post.title}</p>}
        {post.date && <p>{post.date}</p>}
        {(post.tags as unknown as string[])?.map(tag => (
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

  const post = getPostBySlug(slug, ['title', 'date', 'slug', 'tags', 'content', 'img']);

  const content = await markdownToHtml(post!.content || '', post.slug, config.post);

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
