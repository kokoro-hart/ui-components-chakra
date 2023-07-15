import React from "react";

import { Head } from "@/components/Layouts/Head";
import { ReferenceLayout } from "@/components/Layouts/ReferenceLayout";
import { AccordionDemos, fv } from "@/features/Accordion";
import { Nav } from "@/features/Reference";
import { getPath } from "@/utils";

const Demos = () => {
  const head = {
    url: getPath.demos("accordion"),
    title: "アコーディオン - 開発者のUIメモ帳",
    description:
      "WebサイトやWebアプリでよく使用されるUIのバリエーションや事例をまとめています。学習や実装パターンの把握のリファレンスとしてご活用ください。",
    ogImage: "",
  };
  return (
    <>
      <Head {...head} />
      <ReferenceLayout fv={fv}>
        <Nav slug="accordion" />
        <AccordionDemos mt={{ base: "32px", md: "40px" }} />
      </ReferenceLayout>
    </>
  );
};

export default Demos;
