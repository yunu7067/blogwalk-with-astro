import {ThemeString} from '@types';
import {useState, useLayoutEffect} from 'react';
import * as LocalStorage from 'src/libs/LocalStorage';
import {ThemeIdentifiers} from 'src/types/BlogConfigType';

interface useThemeProps {
  default: ThemeIdentifiers;
  light: Object;
  dark: Object;
}

function getSystemTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function useTheme(options: useThemeProps) {
  const [theme, setTheme] = useState(options.light);
  const [themeString, setThemeString] = useState(options.light);

  useLayoutEffect(() => {
    switch (options.default) {
      case 'light': {
        changeTheme('light');
        break;
      }
      case 'dark': {
        changeTheme('dark');
        break;
      }
      case 'system': {
        changeTheme(getSystemTheme());
        break;
      }
      case 'auto':
      default: {
        const storedTheme = LocalStorage.getItem('theme') as ThemeString;
        if (storedTheme === null) {
          LocalStorage.setItem('theme', 'light');
        } else {
          changeTheme(storedTheme);
        }
        break;
      }
    }
  }, []);

  const changeTheme = (theme: ThemeString) => {
    setTheme(theme === 'light' ? options.light : options.dark);
    setThemeString(theme);
    LocalStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    const toggledTheme = theme === options.light ? 'dark' : 'light';
    changeTheme(toggledTheme);
  };

  return {theme, themeString, changeTheme, toggleTheme};
}
