import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import getConfig from 'next/config';
import Layout from '@com/Layout';
import {getAllPosts, getPostBySlug, markdownToHtml} from '@libs';
import Head from 'next/head';

export default function Series({config, series}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout config={config}>
      <Head>
        <title>series:{series}</title>
      </Head>
      Series page
    </Layout>
  );
}

export async function getStaticProps({params}: GetStaticPropsContext<{series: string}>) {
  const config = await getConfig();
  const slug = params!.series;

  const post = getPostBySlug(slug, ['title', 'date', 'slug', 'tags', 'content', 'img']);
  const content = await markdownToHtml(post!.content || '');

  return {
    props: {
      config: {...config},
      series: params!.series,
      post: {
        ...post,
      },

      content,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);
  const paths = posts.map(post => ({
    params: {
      series: post.slug,
    },
  }));

  return {
    paths: [],
    fallback: false,
  };
}
