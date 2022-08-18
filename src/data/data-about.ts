interface DataAbout {
  title: string,
  body: string,
};

const contentAbout: DataAbout = {
  title: `About Page`,
  body: `
  This page was made for a task at Kodehode for a simple implementation of React Router
  `,
};

export function getContentAbout(): DataAbout {
  return contentAbout;
};

export type {
  DataAbout,
};