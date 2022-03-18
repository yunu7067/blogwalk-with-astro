import {createTheme} from '@style/createStyles';

export const darkTheme = createTheme('dark', {
  colors: {
    'fg-default': '#c9d1d9',
    'canvas-default': '#0d1117',

    'btn-text': '#24292f',
    'btn-bg': '#f6f8fa',
    'btn-border': 'rgba(27,31,36,0.15)',
    'btn-hover-bg': ' #f3f4f6',
    'btn-hover-border': 'rgba(27,31,36,0.15)',
  },
  shadows: {
    'btn-shadow': '0 1px 0 rgba(27,31,36,0.04)',
    'btn-inset-shadow': 'inset 0 1px 0 rgba(255,255,255,0.25)',
  },
  space: {},
  fonts: {},
});
