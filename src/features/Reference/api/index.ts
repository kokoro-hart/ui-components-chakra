import cheerio from "cheerio";

import { axios } from "@/libs";

import { CheerioResponse, Resources } from "../types";

export const fetchDomainInfo = (url: string): CheerioResponse => {
  const option = {
    url,
  };

  return axios(option);
};

export const getMetaData = async (resources: Resources[]) => {
  const metaData = [];

  for (const resource of resources) {
    const contents = [];

    for (const url of resource.contents) {
      const res = await fetchDomainInfo(url);
      const data = cheerio.load(res);
      const ogpTags = data("meta[property^='og:']");
      const ogp: { [key: string]: string } = {};

      ogpTags.each((_, tag) => {
        const property = data(tag).attr("property");
        const content = data(tag).attr("content");
        if (property && content) {
          ogp[property] = content;
        }
      });

      contents.push(ogp);
    }

    metaData.push({
      title: resource.title,
      contents: contents,
    });
  }

  return metaData;
};
