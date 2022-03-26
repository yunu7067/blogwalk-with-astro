import {globalCss} from './createStyles';
import {reset} from './reset.css';

export default globalCss({
  ...reset,
  '*': {
    boxSizing: 'border-box',
    fontFamily: '$fonts$pretendard',
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
});
