// Data
import { getContentAbout } from '../../data/data-about';

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
  const aboutContent = getContentAbout();

  return (
    <main>
      <h1>{aboutContent.title}</h1>
      <p>{aboutContent.body}</p>
    </main>
  );
};

export default About;

export type {
  AboutProps,
};