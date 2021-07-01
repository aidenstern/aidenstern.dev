import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
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
    </Main>
  );
};

export default Index;
