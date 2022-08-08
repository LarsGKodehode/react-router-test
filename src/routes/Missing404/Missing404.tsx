// Interface
interface Missing404Prop {
  title: string,
};

const missing404Props = {
  title: "404"
}

// Components
function Missing404(): JSX.Element {
  const { title } = missing404Props;

  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
};

export default Missing404;

export type {
  Missing404Prop,
};