import Section from 'src/components/section';
import SummaryItem from 'src/components/summary-item';
import Main from 'src/layout/main';

const Index = () => {
  return (
    <Main>
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
      <Section title="Experience">
        <SummaryItem name="Amtrak" description="Angular website development" />
        <SummaryItem
          name="General Dynamics Mission Systems"
          description="Machine learning and neural networks"
        />
      </Section>
      <Section title="Skills">
        <SummaryItem
          name="Languages & Frameworks"
          description="placeholder text"
        />

        <SummaryItem name="Technologies" description="placeholder text" />
      </Section>
      <Section title="Projects">
        <SummaryItem name="Project One" description="placeholder text" />

        <SummaryItem name="Project Two" description="placeholder text" />
      </Section>
    </Main>
  );
};

export default Index;
