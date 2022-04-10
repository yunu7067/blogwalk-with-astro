import React from 'react';
import NextDocument, {Html, Head, Main, NextScript} from 'next/document';
import {getCssText} from '@style/createStyles';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
@font-face {
  font-family: 'Pretendard Variable';
  font-weight: 45 920;
  font-style: normal;
  font-display: swap;
  src: local('Pretendard Variable'), url('/fonts/PretendardVariable.woff2') format('woff2-variations');
}
`,
            }}
          />
          <style id='stitches' dangerouslySetInnerHTML={{__html: getCssText()}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
