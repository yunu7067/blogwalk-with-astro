import {styled} from '@style/createStyles';

export const Article = styled('article', {
  lineHeight: '1.75',
  padding: '3em 1em',
  fontFamily: '$pretendard',
  color: '$fg-default',

  'h1,h2,h3,h4,h5,h6': {
    margin: '.3em 0 .1em',
  },
  'p,ul,ol': {
    marginBottom: '.2em',
    // color: '#1d1d1d',
  },
  /* 제목 */
  h1: {
    fontSize: '$8',
  },
  h2: {
    fontSize: '$7',
  },
  h3: {
    fontSize: '$6',
  },
  h4: {
    fontSize: '$5',
  },
  h5: {
    fontSize: '$4',
  },
  h6: {
    fontSize: '$3',
  },
  /* 문장 */
  p: {
    fontSize: '$3',
  },
  /* 하이퍼링크 */
  a: {},
  /* 강조 */
  strong: {},
  /* 기울임 */
  em: {},
  /* 취소선 */
  del: {},
  /* 줄바꿈 */
  br: {},
  /* 목록 */
  ul: {},
  ol: {},
  li: {},
  /* 수평선 */
  hr: {},

  pre: {},

  /* 블록인용 */
  blockquote: {},
  /* 코드블록 */
  code: {
    display: 'block',
    color: 'rgb(57, 58, 52)',
    backgroundColor: 'rgb(246, 248, 250)',
    overflow: 'auto',
  },
  /* 이미지 */
  img: {
    width: '100%',
  },
});
