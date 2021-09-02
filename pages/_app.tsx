import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>D&K Dream에 오신 것을 환영합니다</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="keywords"
          content="소모품 인터넷 구매 대행, 컴퓨터 및 DID 정비"
        />
        <meta name="description" content="" />
        <meta name="author" content="dnkdream.com" />
        <meta property="og:title" content="D&K Dream" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/logo192.png" />

        <link rel="shortcut icon" href="/favicon.png" type="iamge/x-icon" />
        <link rel="apple-touch-icon" href="/logo512.png" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;