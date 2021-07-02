import Section from 'src/components/section';
import { Meta } from 'src/layout/Meta';
import { Main } from 'src/templates/Main';
import { AppConfig } from 'src/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.site_name} description={AppConfig.description} />
      }
    >
      <Section>
        <div className="pb-6 md:w-full md:max-w-xs md:p-0">
          <h2 className="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase">
            About Me
          </h2>
        </div>
        <div className="flex-none text-lg text-gray-600 font-light bg-white md:flex-1 md:pl-20">
          <div className="mb-6">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              debitis possimus sunt, perferendis, optio voluptates id odit, quis
              dolorem omnis veniam! Sint, nostrum perspiciatis inventore facere
              dicta atque provident? Minus.
            </p>
          </div>
        </div>
      </Section>
    </Main>
  );
};

export default Index;
