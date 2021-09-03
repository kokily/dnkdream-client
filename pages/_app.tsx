import Head from 'next/head';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import { useApollo } from '../libs/apollo';
import { GlobalStyle } from '../styles';
import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);

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

      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <ToastContainer position="top-center" draggable={false} />
      </ApolloProvider>
    </>
  );
}

export default App;
