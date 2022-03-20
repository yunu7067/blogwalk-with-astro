import {createStitches} from '@stitches/react';

const Pretendard =
  "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;";

export const {config, createTheme, css, getCssText, globalCss, styled, theme} = createStitches({
  theme: {
    colors: {
      'fg-default': '#24292f',
      'canvas-default': '#ffffff',

      /* Border */
      'border-default': '#d0d7de',

      /* Button */
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
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    fonts: {
      pretendard: Pretendard,
    },
  },
  utils: {
    marginX: (value: unknown) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: unknown) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: unknown) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: unknown) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
  },
});
