export const getPath = {
  home: "/",
  reference: (slug: string, id: string) => {
    return `/reference/${slug}/${id}`;
  },
};
