import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import Layout from '@com/Layout';
import {getConfig} from '@libs';
import {styled} from '@style/createStyles';
import {Pagination, PostList} from 'src/blocks/templates';
import {Post} from '@types';
import {getPagination, getPostsByPagination} from 'src/libs/api';

const Container = styled('div', {
  margin: 'auto',
  maxWidth: '70ch',
  paddingY: '$2',
});

export default function Series({config, pagination, posts}: InferGetStaticPropsType<typeof getStaticProps>) {
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

export async function getStaticProps({params}: GetStaticPropsContext<{pagenum: string}>) {
  const config = await getConfig();
  const pagination = {
    current: Number(params!.pagenum),
    pageNums: getPagination(),
  };
  const pages = getPostsByPagination(params!.pagenum);

  return {
    props: {
      config: {...config},
      pagination,
      posts: pages,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {pagenum: '1'}},
      {params: {pagenum: '2'}},
      {params: {pagenum: '3'}},
      {params: {pagenum: '4'}},
      {params: {pagenum: '5'}},
    ],
    fallback: false,
  };
}
