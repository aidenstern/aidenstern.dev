import React from 'react';

import Link from 'next/link';

import { AppConfig } from 'src/utils/AppConfig';

function TopBar() {
  return (
    <div className="border-b border-gray-300">
      <div className="pt-16 pb-8">
        <div className="font-bold text-3xl text-gray-900">
          {AppConfig.title}
        </div>
        <div className="text-xl">{AppConfig.description}</div>
      </div>
      <div>
        <ul className="flex flex-wrap text-xl">
          <li className="mr-6">
            <Link href="/">
              <a className="text-gray-700 border-none hover:text-gray-900">
                Home
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about/">
              <a className="text-gray-700 border-none hover:text-gray-900">
                About
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <a
              className="text-gray-700 border-none hover:text-gray-900"
              href="https://github.com/aidenstern/aidenstern.dev"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
