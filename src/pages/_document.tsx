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
/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select{margin:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}
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
