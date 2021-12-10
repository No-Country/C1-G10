import "../styles/globals.css";
import Head from 'next/head';
import { store } from "../store/store";
import { Provider } from "react-redux";
import { CartProvider } from '../hooks/use-shopping-cart';
import { config } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/Layout/Layout";

// config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>
         Turistic Life | Checkout
        </title>
        <meta
          name="description"
          content=" Turistic Life | Checkout"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Provider store={store}>
      <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </CartProvider>
    </Provider>
    </div>
  );
}

export default MyApp;
