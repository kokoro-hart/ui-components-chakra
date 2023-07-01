import React from "react";

import { Container } from "@/components/Layouts/Container";
import { Head } from "@/components/Layouts/Head";
import { ReferenceLayout } from "@/components/Layouts/ReferenceLayout";
import { fv } from "@/features/Reference/Accordion/";
import { Nav } from "@/features/Reference/Nav";
import { getPath } from "@/utils";

const Cases = () => {
  const HeadProps = {
    url: getPath.cases("accordion"),
    title: "アコーディオン - 開発者のためのUIメモ帳",
    description:
      "WebサイトやWebアプリでよく使用されるUIのバリエーションや事例をまとめています。学習や実装パターンの把握のリファレンスとしてご活用ください。",
    ogImage: "",
  };
  return (
    <ReferenceLayout fv={fv}>
      <Head {...HeadProps} />
      <Container mt={{ base: "32px", md: "40px" }}>
        <Nav slug="accordion" />
      </Container>
    </ReferenceLayout>
  );
};

export default Cases;
