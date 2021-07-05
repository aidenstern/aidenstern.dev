import React from 'react';

import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

import { sanityClient } from 'src/lib/sanity.server';

type HeaderProps = {
  title: string;
  subtitle: string;
  logo: any;
  headerLinks: {
    href: string;
    text: string;
  }[];
};

function urlFor(source: string) {
  return imageUrlBuilder(sanityClient).image(source);
}

function Header(props: HeaderProps) {
  const logoUrl = urlFor(props.logo.asset._ref).url();
  return (
    <div className="block mb-6 md:flex">
      <div className="w-full" style={{ maxWidth: '150px' }}>
        <Link href="/">
          <a>
            <div className="transform transition-all duration-150 hover:scale-105">
              {logoUrl && (
                <img
                  className="rounded-full"
                  width="150"
                  height="150"
                  src={logoUrl}
                  alt="profile avatar"
                />
              )}
            </div>
          </a>
        </Link>
      </div>
      <div className="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20">
        <Link href="/">
          <a className="text-5xl text-gray-900 font-bold leading-tight hover:text-black">
            {props.title}
          </a>
        </Link>

        <div className="text-gray-600">{props.subtitle}</div>
        <div>
          <ul className="mt-6 uppercase tracking-wider">
            {props.headerLinks.map((headerLink: any) => (
              <li key={headerLink._key} className="inline list-none pr-4">
                <a
                  className="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
                  href={headerLink.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {headerLink.text}
                </a>
              </li>
            ))}
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

export default Header;
