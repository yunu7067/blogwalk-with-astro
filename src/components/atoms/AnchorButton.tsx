import {styled} from '@style/createStyles';
import Link from 'next/link';
import React from 'react';

const StyledAnchor = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px',
  fontSize: '$fontSizes$1',
  color: '$btn-text',
  '&>svg': {
    display: 'inline-block',
    verticalAlign: 'middle',
  },

  '& + &': {
    marginLeft: '$1',
  },
});

export default function AnchorButton(prpos: React.AnchorHTMLAttributes<HTMLAnchorElement> & {href: string}) {
  return (
    <Link href={prpos.href} passHref>
      <StyledAnchor {...prpos} />
    </Link>
  );
}
