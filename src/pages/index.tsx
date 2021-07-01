import Card from 'src/components/card';
import { getAllProjects } from 'src/lib/projects';
import Project from 'src/types/project';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

type IndexProps = {
  allProjects: Project[];
};

const Index = ({ allProjects }: IndexProps) => {
  return (
    <Main
      meta={<Meta title="aiden-stern.dev" description="Personal Website" />}
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum earum
        nam facilis sint doloremque deserunt perferendis quam cum odit
        necessitatibus cupiditate repellat excepturi nesciunt, possimus facere,
        quasi voluptatem. Enim, labore.
      </p>
      {allProjects &&
        allProjects.map((project) => (
          <Card
            key={project.slug}
            title={project.title}
            date={project.date}
            link={project.slug}
            body={project.excerpt}
            footer={project.date}
          />
        ))}
    </Main>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allProjects = getAllProjects(['title', 'date', 'slug', 'excerpt']);

  return {
    props: { allProjects },
  };
};
