// Interface
interface AboutProps {
  title: string,
};

const aboutProps = {
  title: "About",
};

// Components
function About(): JSX.Element {
  const { title } = aboutProps;

  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
};

export default About;

export type {
  AboutProps,
};