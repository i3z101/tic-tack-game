import '../styles/globals.css';
import '../styles/nav.css';
import '../styles/header.css';
import '../styles/game.css';
import 'animate.css';
import Head from 'next/head';
import { Fragment } from 'react';
function MyApp({ Component, pageProps }) {
  return <Fragment>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="/imgs/tic.png" />
        </Head>
      <Component {...pageProps} />
  </Fragment> 
}

export default MyApp
