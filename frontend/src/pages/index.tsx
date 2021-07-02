import Card from 'src/components/card';
import { Meta } from 'src/layout/Meta';
import { getAllPosts } from 'src/lib/posts';
import { Main } from 'src/templates/Main';
import Post from 'src/types/post';

type IndexProps = {
  allProjects: Post[];
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
  const allProjects = getAllPosts(['title', 'date', 'slug', 'excerpt']);

  return {
    props: { allProjects },
  };
};
