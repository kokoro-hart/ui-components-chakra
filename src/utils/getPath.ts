export const getPath = {
  home: "/",
  reference: (slug: string) => {
    return `/reference/${slug}/demos`;
  },
  cases: (slug: string) => {
    return `/reference/${slug}/cases`;
  },
  frameworks: (slug: string) => {
    return `/reference/${slug}/frameworks`;
  },
};
