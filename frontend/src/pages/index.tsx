import Section from 'src/components/section';
import SummaryItem from 'src/components/summary-item';
import MainLayout from 'src/layout/main';
import { headerQuery, homePageQuery } from 'src/lib/queries';
import { sanityClient } from 'src/lib/sanity.server';
import PageWithLayoutType from 'src/types/layout';

type IndexProps = {
  headerProps: any;
  homePage: any;
  preview: boolean;
};

const Index = (props: IndexProps) => {
  const { homePage } = props;
  return (
    <>
      <Section title={homePage.title}>
        <div className="mb-6">
          <p>{homePage.description}</p>
        </div>
      </Section>
      {homePage.sections.map((section: any) => (
        <Section key={section._key} title={section.name}>
          {section.summaryItems.map((summaryItem: any) => (
            <SummaryItem
              key={summaryItem._key}
              name={summaryItem.name}
              description={summaryItem.description}
            />
          ))}
        </Section>
      ))}
    </>
  );
};

(Index as PageWithLayoutType).layout = MainLayout;

export async function getStaticProps({ preview = false }) {
  const header = await sanityClient.fetch(headerQuery);
  const homePage = await sanityClient.fetch(homePageQuery);
  return { props: { headerProps: header, homePage, preview } };
}

export default Index;
