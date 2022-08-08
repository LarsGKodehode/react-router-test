// Interface
interface HomeProps {
  title: string,
};

const homeProps = {
  title: "Home"
}

// Components
function Home(): JSX.Element {
  const { title } = homeProps;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Home;

export type {
  HomeProps,
};