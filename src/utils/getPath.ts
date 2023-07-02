export const getPath = {
  home: "/",
  demos: (slug: string) => {
    return `/reference/${slug}/demos`;
  },
  cases: (slug: string) => {
    return `/reference/${slug}/cases`;
  },
  resources: (slug: string) => {
    return `/reference/${slug}/resources`;
  },
};
