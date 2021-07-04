import Section from 'src/components/section';
import SummaryItem from 'src/components/summary-item';
import Main from 'src/layout/main';
import { homePageQuery } from 'src/lib/queries';
import { sanityClient } from 'src/lib/sanity.server';

type IndexProps = {
  homepage: any;
  preview: boolean;
};

const Index = ({ homepage, preview }: IndexProps) => {
  const { sections } = homepage;
  return (
    <Main preview={preview}>
      <Section title="About Me">
        <div className="mb-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            libero architecto aspernatur doloremque officiis culpa totam hic.
            Aliquam placeat magnam beatae suscipit inventore natus enim quasi,
            repudiandae, voluptatum aut aliquid.
          </p>
        </div>
      </Section>
      {sections.map((section: any) => (
        <Section key={section.id} title={section.name}>
          {section.summaryItems.map((summaryItem: any) => (
            <SummaryItem
              key={summaryItem.id}
              name={summaryItem.name}
              description={summaryItem.description}
            />
          ))}
        </Section>
      ))}
    </Main>
  );
};

export async function getStaticProps({ preview = false }) {
  // Fetch global site settings from Strapi
  const homepage = await sanityClient.fetch(homePageQuery);
  // Pass the data to our page via props
  return { props: { homepage: homepage[0], preview } };
}

export default Index;
