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
    fontWeight: '600',
  },
  h2: {
    fontSize: '$7',
    fontWeight: '500',
  },
  h3: {
    fontSize: '$6',
    fontWeight: '500',
  },
  h4: {
    fontSize: '$5',
    fontWeight: '500',
  },
  h5: {
    fontSize: '$4',
    fontWeight: '500',
  },
  h6: {
    fontSize: '$3',
    fontWeight: '500',
  },
  /* 문장 */
  p: {
    display: 'inline-block',
    fontSize: '$3',
    fontWeight: '400',
  },
  /* 하이퍼링크 */
  a: {
    color: 'hsl(210 100% 66.1%)',
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  /* 강조 */
  strong: {},
  /* 기울임 */
  em: {},
  /* 취소선 */
  del: {},
  /* 줄바꿈 */
  br: {},
  /* 목록 */
  ul: {
    listStyleType: 'disc',
    listStylePosition: 'inside',
  },
  'ul ul': {
    listStyleType: 'circle',
    paddingInlineStart: 'em',
  },
  'ul ul ul': {
    listStyleType: 'square',
  },
  ol: {
    listStyleType: 'unset',
    listStylePosition: 'inside',
  },
  'ol ol': {
    listStyleType: 'unset',
  },
  li: {
    padding: 'auto',
  },
  /* 수평선 */
  hr: {
    margin: '1em 0',
  },

  pre: {},

  /* 블록인용 */
  blockquote: {
    display: 'block',
    margin: '.5em 0',
    padding: '0.2em 0.8em',
    borderLeft: '5px solid gray',
    '&>*': {
      margin: '0',
    },
  },
  /* 코드블록 */
  code: {
    display: 'block',
    margin: '.5em 0',
    padding: '.5em 1em',
    borderRadius: '6px',
    color: 'rgb(57, 58, 52)',
    backgroundColor: 'rgb(246, 248, 250)',
    overflow: 'auto',
    '&>*': {
      margin: '0',
    },
  },
  /* 이미지 */
  img: {
    display: 'block',
    width: '100%',
    borderRadius: '5px',
    margin: '.5em 0',
  },
});
