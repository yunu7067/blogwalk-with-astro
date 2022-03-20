import {styled} from '@style/createStyles';

export const Button = styled('button', {
  position: 'relative',
  display: 'inline-block',
  fontSize: '$3',
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

  variants: {
    content: {
      text: {
        height: '32px',
      },
      icon: {
        width: '32px',
        height: '32px',
      },
      icontext: {
        padding: '5px 16px',
        '& svg': {
          marginRight: '8px',
        },
      },
    },
  },
});
