import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { APP_CONFIG } from 'src/utils/app-config';

function TopBar() {
  return (
    <div className="block mb-6 md:flex">
      <div className="w-full" style={{ maxWidth: '150px' }}>
        <Link href="/">
          <a>
            <div className="transform transition-all duration-150 hover:scale-105">
              <Image
                className="rounded-full"
                width="150"
                height="150"
                src="/assets/images/profile.jpg"
                alt="profile avatar"
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20">
        <Link href="/">
          <a className="text-5xl text-gray-900 font-bold leading-tight hover:text-black">
            {APP_CONFIG.title}
          </a>
        </Link>

        <div className="text-gray-600">{APP_CONFIG.description}</div>
        <div>
          <ul className="mt-6 uppercase tracking-wider">
            <li className="inline list-none pr-4">
              <a
                className="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
                href="https://github.com/aidenstern"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="inline list-none pr-4">
              <a
                className="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
                href="https://linkedin.com/in/aiden-stern"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>

            <li className="inline list-none pr-4">
              <Link href="/blog">
                <a
                  className="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
                  rel="noreferrer"
                >
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
