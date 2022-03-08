import type {AppProps} from 'next/app';
import {useLayoutEffect, useState} from 'react';
import globalStyles from '@style/globalStyles';

export default function MyApp({Component, pageProps}: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    globalStyles();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <></>;
  }

  return <Component {...pageProps} />;
}
