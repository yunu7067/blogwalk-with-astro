/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */

export const minireset = {
  'html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6': {
    margin: 0,
    padding: 0,
  },
  'h1,h2,h3,h4,h5,h6': {
    fontSize: '100%',
    fontWeight: 'normal',
  },
  ul: {
    listStyle: 'none',
  },
  'button,input,select': {
    margin: 0,
  },
  html: {
    boxSizing: 'border-box',
  },
  '*,*::before,*::after ': {
    boxSizing: 'inherit',
  },
  'img,video': {
    height: 'auto',
    maxWidth: '100%',
  },
  iframe: {
    border: 0,
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  'td,th': {
    padding: 0,
  },
};
