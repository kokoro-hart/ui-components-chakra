import React from "react";

import { ReferenceLayout } from "@/components/Layouts/ReferenceLayout";
import { AccordionDemos, fv } from "@/features/Reference/Accordion";
import { Nav } from "@/features/Reference/Nav";
import { getPath } from "@/utils";

const Demos = () => {
  const head = {
    url: getPath.demos("accordion"),
    title: "アコーディオン - 開発者のためのUIメモ帳",
    description:
      "WebサイトやWebアプリでよく使用されるUIのバリエーションや事例をまとめています。学習や実装パターンの把握のリファレンスとしてご活用ください。",
    ogImage: "",
  };
  return (
    <ReferenceLayout fv={fv} head={head}>
      <Nav slug="accordion" />
      <AccordionDemos mt={{ base: "32px", md: "40px" }} />
    </ReferenceLayout>
  );
};

export default Demos;
