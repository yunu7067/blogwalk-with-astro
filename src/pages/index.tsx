import React, {useLayoutEffect} from 'react';
import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next';
import Head from 'next/head';

import {Button} from '@com/atoms';
import StitchesLogo from '@com/atoms/StitchesLogo';
import {styled} from '@style/createStyles';
import Layout from '@com/Layout';
import {getAllPosts} from 'src/libs/api';
import Link from 'next/link';
import {getConfig} from '@libs';

const Box = styled('div', {});

const Text = styled('p', {
  fontFamily: '$pretendard',
  color: '$hiContrast',
});

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
});

function Home({config, posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout config={config}>
      <Head>
        <title>{config.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box css={{paddingY: '$6'}}>
        <Container size={{'@initial': '1', '@bp1': '2'}}>
          <StitchesLogo />
          <Text as='h1'>Hello, from Stitches.</Text>
          <Text>
            For full documentation, visit <Link href='https://stitches.dev'>stitches.dev</Link>.
          </Text>
          <Button>
            테스트
            <svg viewBox='0 0 32 32' fill='none' stroke='currentcolor' strokeWidth='2'>
              <path d='M22 6 L30 16 22 26 M30 16 L2 16'></path>
            </svg>
          </Button>

          <section>
            <h2>Blog</h2>
            <ul>
              {posts.map(({slug, date, title}) => (
                <li key={slug} style={{marginBottom: '20px'}}>
                  <Link href={`/p/${slug}`}>
                    <a>
                      {title}
                      <br />
                      {date}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const posts = getAllPosts(['slug', 'title', 'description', 'date', 'img']);

  console.log(config);

  return {
    props: {
      config: {...config},
      posts,
    },
  };
}

export default Home;
