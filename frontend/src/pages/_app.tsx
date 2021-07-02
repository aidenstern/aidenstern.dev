import { createContext } from 'react';

import App, { AppProps } from 'next/app';

import { fetchAPI } from '../lib/api';

import '../styles/main.css';

type GlobalContextType = {
  [key: string]: any;
};

export const GlobalContext = createContext({} as GlobalContextType);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContext.Provider value={global}>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
};

MyApp.getInitialProps = async (ctx: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI('/global');
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
