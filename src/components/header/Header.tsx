import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppConfig } from 'src/utils/AppConfig';

function TopBar() {
  const router = useRouter();

  return (
    <div className="p-8 relative max-w-screen-xl xs:p-24">
      <div className="block mb-6 md:flex">
        <div className="w-full" style={{ maxWidth: '150px' }}>
          <div className="rounded-full transform transition-all duration-150 hover:scale-105">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-full"
              width="150"
              height="150"
              src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
              alt="profile avatar"
            />
          </div>
        </div>
        <div className="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20">
          <div className="text-5xl text-gray-900 font-bold leading-tight hover:text-black">
            {AppConfig.title}
          </div>
          <div className="text-gray-600">{AppConfig.description}</div>
          <div>
            <ul className="mt-6 uppercase tracking-wider">
              <li className="inline list-none pr-4">
                <Link href="/">
                  <a className="text-gray-700 border-none hover:text-gray-900">
                    Home
                  </a>
                </Link>
              </li>
              <li className="inline list-none pr-4">
                <Link href="/about/">
                  <a className="text-gray-700 border-none hover:text-gray-900">
                    About
                  </a>
                </Link>
              </li>
              <li className="inline list-none pr-4">
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
      </div>
    </div>
  );
}

export default TopBar;
