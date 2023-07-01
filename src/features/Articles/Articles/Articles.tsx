import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import { Article } from "../Article/Article";

export const Articles = () => {
  const articles = [
    {
      id: "1",
      titleJa: "アコーディオン",
      titleEn: "Accordion",
      thumbnail: {
        src: "/image/accordion.svg",
      },
    },
    {
      id: "2",
      titleJa: "タブ",
      titleEn: "Tab",
      thumbnail: {
        src: "/image/tabs.svg",
      },
    },
    {
      id: "3",
      titleJa: "ローディング",
      titleEn: "Loading",
      thumbnail: {
        src: "/image/progress.svg",
      },
    },
    {
      id: "4",
      titleJa: "モーダル",
      titleEn: "Modal",
      thumbnail: {
        src: "/image/modal.svg",
      },
    },
    {
      id: "5",
      titleJa: "トースト",
      titleEn: "Toast",
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
        <GridItem key={article.id}>
          <Article {...article} />
        </GridItem>
      ))}
    </Grid>
  );
};
