import type {AppProps} from 'next/app';
import {useEffect, useLayoutEffect, useState} from 'react';
import globalStyles from '@style/globalStyles';
import 'public/lib/katex/katex.min.css';
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/a11y-dark.css';
import {useRouter} from 'next/router';

export default function MyApp({Component, pageProps}: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    globalStyles();
    setIsLoading(false);

    hljs.registerLanguage('javascript', javascript);
  }, []);

  useEffect(() => {
    if (router.isReady) {
      window.onload = () => {
        console.log('hljs 초기화');
        hljs.highlightAll();
      };
    }
  }, [router.isReady]);

  if (isLoading) {
    return <></>;
  }

  return <Component {...pageProps} />;
}
