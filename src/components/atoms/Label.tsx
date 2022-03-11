import {styled} from '@style/createStyles';
import Link from 'next/link';
import React from 'react';

const StyledLabel = styled('a', {
  display: 'inline-block',
  padding: '0 7px',
  fontSize: '$fontSizes$1',
  fontWeight: '500',
  lineHeight: '18px',
  whiteSpace: 'nowrap',
  border: '1px solid $border$default',
  borderRadius: '2em',
  color: '$colors$foreground',
  background: '$colors$background',
});

function Label(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={props.href as string} passHref>
      <StyledLabel {...props} />
    </Link>
  );
}

export default Label;
