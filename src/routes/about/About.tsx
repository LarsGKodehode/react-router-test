// Interface
interface AboutProps {
  title: string,
};

const aboutProps = {
  title: "About",
}

// Components
function About(): JSX.Element {
  const { title } = aboutProps;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default About;

export type {
  AboutProps,
};