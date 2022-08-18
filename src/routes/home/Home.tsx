// Data
import { getContentHome } from '../../data/data-home';

// Interface
interface HomeProps {
  title?: string,
};

const homeProps = {
  title: "Home",
};

// Components
function Home(): JSX.Element {
  const { title } = homeProps;
  const homeContent = getContentHome();

  return (
    <main>
      <h1>{homeContent.title}</h1>
      <p>{homeContent.body}</p>
    </main>
  );
};

export default Home;

export type {
  HomeProps,
};