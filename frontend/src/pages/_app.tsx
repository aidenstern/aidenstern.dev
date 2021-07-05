import { createContext } from 'react';

import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

import PageWithLayoutType from 'src/types/layout';
import { DEFAULT_SEO } from 'src/utils';

import '../styles/main.css';

type GlobalContextType = {
  [key: string]: any;
};

type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
} & AppProps;

export const GlobalContext = createContext({} as GlobalContextType);

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const Layout = Component.layout || ((props) => <>{props.children}</>);
  const { headerProps, preview, ...rest } = pageProps;
  return (
    <>
      <Layout headerProps={headerProps} preview={preview}>
        <DefaultSeo {...DEFAULT_SEO} />
        <GlobalContext.Provider value={{}}>
          {/* eslint-disable react/jsx-props-no-spreading */}
          <Component {...rest} />
        </GlobalContext.Provider>
      </Layout>
    </>
  );
};

export default MyApp;
