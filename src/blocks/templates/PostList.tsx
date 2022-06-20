import {styled} from '@style/createStyles';
import {PostType} from '@types';
import Link from 'next/link';
import React from 'react';
import {Post} from '@types';

const StyledPostListItem = styled('li', {
  marginBottom: '$2',
  border: '1px solid $border-default',
  borderRadius: '6px',
  backgroundColor: '$btn-bg',
  color: '$btn-text',

  a: {
    display: 'block',
    paddingX: '$3',
    paddingY: '$2',
  },
  img: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    overflow: 'hidden',
    objectPosition: 'center',
    borderRadius: '10px',
  },
});

function PostListItem({post, ...props}: React.LiHTMLAttributes<HTMLLIElement> & {post: Post}) {
  return (
    <StyledPostListItem>
      <Link href={`/p/${post.slug}`}>
        <a>
          {post.meta.image && (
            <img src={`/p/${post.slug}/${post.meta.image}`} width='600' height='100' alt={post.meta.title} />
          )}

          <h2>{post.meta.title}</h2>
          <p>{post.meta.date}</p>
          {post.meta.description && <p>{post.meta.description}</p>}
        </a>
      </Link>
    </StyledPostListItem>
  );
}

const PostList = styled('ul', {
  marginY: '$3',
});

PostListItem.displayName = 'PostList.Item';

export default Object.assign(PostList, {Item: PostListItem});
