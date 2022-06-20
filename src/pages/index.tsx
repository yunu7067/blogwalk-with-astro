import React, {useEffect} from 'react';
import type {InferGetStaticPropsType} from 'next';
import {styled} from '@style/createStyles';
import Layout from '@com/Layout';
import {getConfig} from '@libs';
import {Pagination, PostList} from 'src/blocks/templates';
import {getPagination, getPostsByPagination} from 'src/libs/api';
import {Post} from '@types';

const Container = styled('div', {
  margin: 'auto',
  maxWidth: '70ch',
  paddingY: '$2',
});

function Home({config, pagination, posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout config={config}>
      <Container>
        <section>
          <h2>게시글</h2>

          <PostList>
            {posts.map(post => (
              <PostList.Item key={post.slug} post={post as unknown as Post} />
            ))}
          </PostList>
          <Pagination {...pagination} />
        </section>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  // const posts = getAllPosts(['slug', 'title', 'description', 'date', 'img']);
  const pagination = {
    current: 1,
    pageNums: getPagination(),
  };

  const pages = getPostsByPagination('1');
  // pages.map(page => console.log(page.meta));
  console.log(pages.length);

  // console.debug(config);

  return {
    props: {
      config: {...config},
      pagination,
      posts: pages,
    },
  };
}

export default Home;
