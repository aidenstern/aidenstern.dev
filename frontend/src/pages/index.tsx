import { useContext, useEffect } from 'react';

import ContactForm from 'src/components/contact-form';
import Section from 'src/components/section';
import SummaryItem from 'src/components/summary-item';
import { homePageQuery } from 'src/lib/queries';
import { sanityClient } from 'src/lib/sanity.server';

import { GlobalContext } from './_app';

type IndexProps = {
  homePage: any;
  preview: boolean;
};

const Index = (props: IndexProps) => {
  const { setState } = useContext(GlobalContext);
  const { homePage, preview } = props;

  useEffect(() => {
    if (preview) {
      setState({ preview: true });
    }
  });

  return (
    <>
      <Section title={homePage.title}>
        <div className="mb-6">
          <p>{homePage.description}</p>
        </div>
      </Section>
      {homePage.sections.map((section: any) => (
        <Section key={section._key} title={section.title}>
          {section.summaryItems.map((summaryItem: any) => (
            <SummaryItem
              key={summaryItem._key}
              name={summaryItem.name}
              description={summaryItem.description}
            />
          ))}
        </Section>
      ))}
      <Section title="Contact Me">
        <div className="mb-6">
          <ContactForm />
        </div>
      </Section>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const homePage = await sanityClient.fetch(homePageQuery);
  return { props: { homePage, preview } };
}

export default Index;
