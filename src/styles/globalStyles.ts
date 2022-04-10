import {globalCss} from './createStyles';
import {minireset} from '@style/minireset.css';

export default globalCss({
  ...minireset,
  '*': {
    boxSizing: 'border-box',
    fontFamily: '$fonts$pretendard !important',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  img: {
    display: 'block',
  },
  'html, body': {
    padding: 0,
    margin: 0,
  },
  body: {
    overflowY: 'scroll',
  },
});
