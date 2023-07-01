import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import { Article } from "../Card/Card";

export const Articles = () => {
  const articles = [
    {
      slug: "accordion",
      title: "アコーディオン",
      thumbnail: {
        src: "/image/accordion.svg",
      },
    },
    {
      slug: "tab",
      title: "タブ",
      thumbnail: {
        src: "/image/tabs.svg",
      },
    },
    {
      slug: "loading",
      title: "ローディング",
      thumbnail: {
        src: "/image/progress.svg",
      },
    },
    {
      slug: "modal",
      title: "モーダル",
      thumbnail: {
        src: "/image/modal.svg",
      },
    },
    {
      slug: "toast",
      title: "トースト",
      thumbnail: {
        src: "/image/toast.svg",
      },
    },
  ];
  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }}
      gap={{ base: 4, md: 6 }}
    >
      {articles.map((article) => (
        <GridItem key={article.slug}>
          <Article {...article} />
        </GridItem>
      ))}
    </Grid>
  );
};
