import {styled} from '@style/createStyles';
import React from 'react';

const StyledButton = styled('button', {
  position: 'relative',
  display: 'inline-block',
  fontSize: '$3',
  padding: '5px 16px',
  fontWeight: '600',
  lineHeight: '20px',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  cursor: 'pointer',
  userSelect: 'none',
  border: '1px solid',
  borderRadius: '6px',
  appearance: 'none',

  backgroundColor: '$btn-bg',
  color: '$btn-text',
  borderColor: '$btn-border',
  boxShadow: '$btn-shadow, $btn-inset-shadow',

  '&:hover': {
    backgroundColor: '$btn-hover-bg',
    borderColor: '$btn-hover-border',
  },
  '& svg': {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
});

function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return <StyledButton {...props} />;
}

export default Button;
