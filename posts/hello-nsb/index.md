---
title: 'Hello Blog!'
description: 'next.js와 stitches, lunr 검색 엔진으로 만드는 블로그'
date: '2022-05-05'
image: profile-picture.jpg
draft: false
series: 'TestSeries'
tags: ['Test']
---

# Next Static Blog

## Who am I

![프로필사진](./profile-picture.jpg)

## Hello Blog!

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### CodeBlock

```javascript
export default function useTheme(options: useThemeProps) {
  const [theme, setTheme] = useState<typeof lightTheme | typeof darkTheme>(options.light);
  const [themeString, setThemeString] = useState<string>('light');

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
```

#### Test
