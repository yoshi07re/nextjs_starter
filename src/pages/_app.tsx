import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { css, GlobalStyles } from 'twin.macro';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default MyApp;
