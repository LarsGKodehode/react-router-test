// Interface
interface HomeProps {
  title: string,
};

// Components
function Home(props: HomeProps): JSX.Element {
  const { title } = props;

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