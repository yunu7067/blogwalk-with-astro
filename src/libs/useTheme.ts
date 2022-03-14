import {ThemeString} from '@types';
import {parseCookies} from 'nookies';
import {useState, useLayoutEffect} from 'react';
import * as LocalStorage from 'src/libs/LocalStorage';

interface useThemeProps {
  light: Object;
  dark: Object;
}

export default function useTheme(options: useThemeProps) {
  const [theme, setTheme] = useState(options.light);

  useLayoutEffect(() => {
    const storedTheme = LocalStorage.getItem('theme') as ThemeString;

    if (storedTheme === null) {
      LocalStorage.setItem('theme', 'light');
    } else {
      changeTheme(storedTheme);
    }

    const cookies = parseCookies();
    console.log({cookies, storedTheme});
  }, []);

  const changeTheme = (theme: ThemeString) => {
    setTheme(theme === 'light' ? options.light : options.dark);
    LocalStorage.setItem('theme', theme);
  };
  const toggleTheme = () => {
    const toggledTheme = theme === options.light ? 'dark' : 'light';
    changeTheme(toggledTheme);
  };

  return {theme, changeTheme, toggleTheme};
}
