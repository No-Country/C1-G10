import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/Layout/Layout";

config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
