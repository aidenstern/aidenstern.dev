import React from 'react';

import Link from 'next/link';

import cardStyles from './card.module.css';

export interface CardProps {
  link: string;
  title: string;
  date: string;
  body: string;
  footer: string;
}

export default function Card(props: CardProps) {
  const { link, title, date, body, footer } = props;
  return (
    <Link href={link}>
      <div className={cardStyles.card}>
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="flex justify-between">
          <h1>{date}</h1>
          <h1>{footer}</h1>
        </div>
      </div>
    </Link>
  );
}
