import { ReactNode } from 'react';

import { NextSeoProps, NextSeo } from 'next-seo';

import Alert from 'src/components/alert';
import Header from 'src/components/header';
import { APP_CONFIG } from 'src/utils';

type MainLayoutProps = {
  meta?: NextSeoProps;
  preview: boolean;
  headerProps: any;
  children: ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  const { headerProps } = props;
  return (
    <>
      {props.meta ? <NextSeo {...props.meta} /> : <></>}
      <Alert preview={props.preview} />
      <div className="relative">
        <div className="p-8 relative max-w-screen-xl xs:p-24">
          <Header
            title={headerProps.title}
            subtitle={headerProps.subtitle}
            headerLinks={headerProps.headerLinks}
          />
          {props.children}

          <div className="border-t border-gray-300 text-center py-8 text-sm">
            © Copyright {new Date().getFullYear()} {APP_CONFIG.title}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
