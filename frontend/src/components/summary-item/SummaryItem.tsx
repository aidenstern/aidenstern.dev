import React from 'react';

import Link from 'next/link';

type SummaryItemProps = {
  name: string;
  description: string;
  link?: string | undefined;
  internal?: boolean;
};

const SummaryItem = ({
  name,
  description,
  link,
  internal = false,
}: SummaryItemProps) => {
  let linkContent;
  if (internal && link) {
    linkContent = <Link href={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className="mb-6">
      <h3
        className={`font-semibold text-gray-900 pb-1 ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className="text-md text-gray-600 font-light">{description}</p>
    </div>
  );
};

export default SummaryItem;
