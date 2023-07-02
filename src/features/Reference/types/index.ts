export type Resources = {
  title: string;
  contents: string[];
};

export type CheerioResponse = Promise<"string | AnyNode | AnyNode[] | Buffer">;

export type Contents = {
  "og:locale": string;
  "og:type": string;
  "og:title": string;
  "og:description": string;
  "og:url": string;
  "og:site_name": string;
  "og:image": string;
  "og:updated_time": string;
};

export type MetaData = {
  title: string;
  contents: Contents[];
};
