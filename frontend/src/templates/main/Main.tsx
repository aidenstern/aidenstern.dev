import { ReactNode } from 'react';

import Header from 'src/components/header';

import { AppConfig } from '../../utils/AppConfig';

type MainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: MainProps) => (
  <div className="relative">
    {props.meta}
    <div className="p-8 relative max-w-screen-xl xs:p-24">
      <Header />
      {props.children}

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
      </div>
    </div>
  </div>
);

export default Main;
