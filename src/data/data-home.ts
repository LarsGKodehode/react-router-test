interface DataHome {
  title: string,
  body: string,
};

const contentHome: DataHome = {
  title: `Homepage with som descriptive info about page`,
  body: `
  Her comes a more longwinded and verbose description of the meaning of life, this site and everything
  `,
};

export function getContentHome(): DataHome {
  return contentHome;
};

export type {
  DataHome,
};