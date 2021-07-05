import { createContext, Dispatch, SetStateAction, useState } from 'react';

import { DefaultSeo } from 'next-seo';
import App, { AppProps, AppContext } from 'next/app';

import MainLayout from 'src/layout/main';
import { headerQuery } from 'src/lib/queries';
import { sanityClient } from 'src/lib/sanity.server';
import { DEFAULT_SEO } from 'src/utils';

import '../styles/main.css';

type GlobalStateType = {
  preview: boolean;
};

export const GlobalContext = createContext({
  state: {} as Partial<GlobalStateType>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalStateType>>>,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { headerProps, ...rest } = pageProps;
  const [state, setState] = useState({
    preview: false,
  } as Partial<GlobalStateType>);
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <GlobalContext.Provider value={{ state, setState }}>
        <MainLayout headerProps={headerProps} preview={state.preview}>
          <Component {...rest} />
        </MainLayout>
        {/* eslint-disable react/jsx-props-no-spreading */}
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const headerProps = await sanityClient.fetch(headerQuery);

  return { ...appProps, pageProps: { headerProps } };
};

export default MyApp;
