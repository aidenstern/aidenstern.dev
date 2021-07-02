import App from "next/app";
import { AppProps } from "next/app";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";

export const GlobalContext = createContext({});

import "../styles/main.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log(pageProps);
  return (
    <GlobalContext.Provider value={global}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
};

MyApp.getInitialProps = async (ctx: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
