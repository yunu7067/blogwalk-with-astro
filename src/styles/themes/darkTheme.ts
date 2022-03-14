import {createTheme} from '@style/createStyles';

export const darkTheme = createTheme('dark', {
  colors: {
    hiContrast: 'hsl(206,2%,93%)',
    loContrast: 'hsl(206,8%,8%)',

    gray100: 'hsl(206,22%,99%)',
    gray200: 'hsl(206,12%,97%)',
    gray300: 'hsl(206,11%,92%)',
    gray400: 'hsl(206,10%,84%)',
    gray500: 'hsl(206,10%,76%)',
    gray600: 'hsl(206,10%,44%)',
  },
  space: {},
  fonts: {},
});
