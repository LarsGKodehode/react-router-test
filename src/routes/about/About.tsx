// Interface
interface AboutProps {
  title: string,
};

// Components
function About(props: AboutProps): JSX.Element {
  const { title } = props;

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