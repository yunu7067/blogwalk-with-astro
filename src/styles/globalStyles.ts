import {globalCss} from './createStyles';
import {reset} from './reset.css';

export default globalCss({
  ...reset,
  '@font-face': {
    fontFamily: 'Pretendard',
    fontDisplay: 'swap',
    fontWeight: '45 920',
    fontStyle: 'normal',
    src: `url("/fonts/PretendardVariable.woff2") format("woff2-variations")`,
  },
  '*': {
    boxSizing: 'border-box',
    fontFamily: '$fonts$pretendard',
  },
  img: {
    display: 'block',
  },
  'html, body': {
    padding: 0,
    margin: 0,
    background: '$colors$background',
    color: '$colors$foreground',
  },
});
