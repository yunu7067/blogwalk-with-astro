import {createTheme} from '@style/createStyles';

export const darkTheme = createTheme('dark', {
  colors: {
    'fg-default': '#c9d1d9',
    'canvas-default': '#0d1117',

    /* Border */
    'border-default': '#303643',

    /* Button */
    'btn-text': '#c9d1d9',
    'btn-bg': '#21262d',
    'btn-border': 'rgba(240,246,252,0.1)',
    'btn-hover-bg': ' #30363d',
    'btn-hover-border': '#8b949e',
  },
  shadows: {
    'btn-shadow': '0 0 transparent',
    'btn-inset-shadow': '0 0 transparent',
  },
  space: {},
  fonts: {},
});
