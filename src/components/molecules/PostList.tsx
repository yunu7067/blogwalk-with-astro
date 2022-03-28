import {styled} from '@style/createStyles';
import {PostType} from '@types';
import Link from 'next/link';
import React from 'react';

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
});

function PostListItem(props: React.LiHTMLAttributes<HTMLLIElement> & {post: PostType}) {
  return (
    <StyledPostListItem>
      <Link href={`/p/${props.post.slug}`}>
        <a>
          {props.post.title}
          <br />
          {props.post.date}
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
