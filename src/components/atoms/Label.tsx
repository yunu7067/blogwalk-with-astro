import {styled} from '@style/createStyles';
import Link from 'next/link';
import React from 'react';

const StyledLabel = styled('a', {
  display: 'inline-block',
  padding: '0 7px',
  fontSize: '$1',
  fontWeight: '500',
  lineHeight: '18px',
  whiteSpace: 'nowrap',

  borderRadius: '2em',
  backgroundColor: '$btn-bg',
  color: '$btn-text',
  border: '1px solid transparent',
  borderColor: '$btn-border',
  boxShadow: '$btn-shadow, $btn-inset-shadow',
  '&:hover': {
    backgroundColor: '$btn-hover-bg',
    borderColor: '$btn-hover-border',
  },
});

function Label(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={props.href as string} passHref>
      <StyledLabel {...props} />
    </Link>
  );
}

export default Label;
