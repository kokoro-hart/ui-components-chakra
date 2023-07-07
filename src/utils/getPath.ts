export const getPath = {
  home: "/",
  demos: (slug: string) => {
    return `/reference/${slug.toLowerCase()}/demos`;
  },
  cases: (slug: string) => {
    return `/reference/${slug.toLowerCase()}/cases`;
  },
  resources: (slug: string) => {
    return `/reference/${slug.toLowerCase()}/resources`;
  },
};
