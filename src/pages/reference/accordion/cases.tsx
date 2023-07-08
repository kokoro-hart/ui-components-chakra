import React from "react";

import { ReferenceLayout } from "@/components/Layouts/ReferenceLayout";
import { AccordionCases, fv } from "@/features/Reference/Accordion/";
import { Nav } from "@/features/Reference/Nav";
import { getPath } from "@/utils";

const Cases = () => {
  const head = {
    url: getPath.cases("accordion"),
    title: "アコーディオン - 開発者のUIメモ帳",
    description:
      "WebサイトやWebアプリでよく使用されるUIのバリエーションや事例をまとめています。学習や実装パターンの把握のリファレンスとしてご活用ください。",
    ogImage: "",
  };
  return (
    <ReferenceLayout fv={fv} head={head}>
      <Nav slug="accordion" />
      <AccordionCases mt={{ base: "32px", md: "40px" }} />
    </ReferenceLayout>
  );
};

export default Cases;
