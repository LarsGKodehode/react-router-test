// Interface
interface HomeProps {
  title: string,
};

const homeProps = {
  title: "Home",
};

// Components
function Home(): JSX.Element {
  const { title } = homeProps;

  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
};

export default Home;

export type {
  HomeProps,
};