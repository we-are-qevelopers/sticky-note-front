import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from '../styles/global';

const App: React.VFC = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Head>
        {/* NOTE: chafSetはdraft.jsを使うときにはcharSet={'utf-8'} が必要らしい？ (https://draftjs.org/docs/getting-started)*/}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          charSet={'utf-8'}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;
