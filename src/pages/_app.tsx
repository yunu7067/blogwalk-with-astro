import type {AppProps} from 'next/app';
import {useEffect, useLayoutEffect, useState} from 'react';
import globalStyles from '@style/globalStyles';
import 'public/lib/katex/katex.min.css';

export default function MyApp({Component, pageProps}: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    globalStyles();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <></>;
  }

  return <Component {...pageProps} />;
}
