import React from 'react';
import type {InferGetStaticPropsType} from 'next';
import {styled} from '@style/createStyles';
import Layout from '@com/Layout';
import {getConfig, getAllPosts} from '@libs';
import {Button} from '@com/atoms';
import {ArrowLeftIcon, ArrowRightIcon} from '@radix-ui/react-icons';
import {PostType} from '@types';
import {PostList} from '@com/molecules';

const Container = styled('div', {
  margin: 'auto',
  maxWidth: '70ch',
  paddingY: '$2',
});

function Home({config, posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout config={config}>
      <Container>
        <section>
          <h2>게시글</h2>

          <PostList>
            {posts.map(post => (
              <PostList.Item key={post.slug} post={post as unknown as PostType} />
            ))}
          </PostList>
        </section>
      </Container>
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
