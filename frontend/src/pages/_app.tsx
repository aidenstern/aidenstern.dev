import { createContext } from 'react';

import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

import { DEFAULT_SEO } from 'src/utils';

import '../styles/main.css';

type GlobalContextType = {
  [key: string]: any;
};

export const GlobalContext = createContext({} as GlobalContextType);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <GlobalContext.Provider value={global}>
        {/* eslint-disable react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

export default MyApp;
