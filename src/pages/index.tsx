import React from 'react';
import type {InferGetStaticPropsType} from 'next';
import {styled} from '@style/createStyles';
import Layout from '@com/Layout';
import {getConfig, getAllPosts} from '@libs';
import {Button} from '@com/atoms';
import {ArrowLeftIcon, ArrowRightIcon} from '@radix-ui/react-icons';
import {PostType} from '@types';
import {PostList} from '@com/molecules';

const Box = styled('div', {});

const Container = styled('div', {
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
      <Box css={{paddingY: '$6'}}>
        <Container size={{'@initial': '1', '@bp1': '2'}}>
          <section>
            <h2>Blog</h2>

            <PostList>
              {posts.map(post => (
                <PostList.Item key={post.slug} post={post as unknown as PostType} />
              ))}
            </PostList>
          </section>
          <Button content='icontext'>
            <ArrowLeftIcon />
            Prev
          </Button>
          <Button content='icontext'>
            Next
            <ArrowRightIcon />
          </Button>
        </Container>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const posts = getAllPosts(['slug', 'title', 'description', 'date', 'img']);

  // console.debug(config);

  return {
    props: {
      config: {...config},
      posts,
    },
  };
}

export default Home;
