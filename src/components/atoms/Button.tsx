import {styled} from '@style/createStyles';
import React from 'react';

const StyledButton = styled('button', {
  borderRadius: '9999px',
  fontSize: '15px',
  height: '36px',
  position: 'relative',
  border: '0',
  paddingLeft: '15px',
  paddingRight: '15px',
  fontWeight: 800,

  backgroundColor: '$colors$loContrast',
  color: '$colors$hiContrast',

  '&:hover': {
    backgroundColor: 'lightgray',
  },
  '& svg': {
    display: 'inline-block',
    verticalAlign: 'bottom',
    height: '15px',
    marginLeft: '5px',
  },
});

function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return <StyledButton {...props} />;
}

export default Button;
