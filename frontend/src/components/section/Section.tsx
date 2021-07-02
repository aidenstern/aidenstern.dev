import React, { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
};

const Section = (props: SectionProps) => (
  <div className="block pt-12 md:flex">{props.children}</div>
);

export default Section;
