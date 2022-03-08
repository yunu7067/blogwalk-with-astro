import {globalCss} from '@stitches/react';
import {reset} from './reset.css';

const Pretendard =
  "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;";

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
  },
  img: {
    display: 'block',
  },
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: Pretendard,
  },
  button: {
    fontFamily: Pretendard,
  },
});
