import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import createStore from '../reducers';
import Head from 'next/head'

class CjApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
          <meta name="description" content="jarvan的技术博客" />
          <meta name="keywords" content="jarvan,技术博客,前端" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(CjApp);
