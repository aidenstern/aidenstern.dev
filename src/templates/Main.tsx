import { ReactNode } from 'react';

import Header from 'src/components/header';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}
    <div className="max-w-screen-md mx-auto">
      <Header />
      <div className="py-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
      </div>
    </div>
  </div>
);

export { Main };
