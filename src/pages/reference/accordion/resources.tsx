import { FC } from "react";

import { Container } from "@/components/Layouts/Container";
import { Head } from "@/components/Layouts/Head";
import { ReferenceLayout } from "@/components/Layouts/ReferenceLayout";
import { AccordionResources, fv, resources } from "@/features/Reference/Accordion";
import { getMetaData } from "@/features/Reference/api";
import { Nav } from "@/features/Reference/Nav";
import { MetaData } from "@/features/Reference/types";
import { getPath } from "@/utils";

export const getStaticProps = async () => {
  const metaData = await getMetaData(resources);

  return {
    props: {
      metaData,
    },
  };
};

type Props = {
  metaData: MetaData[];
};

const Resources: FC<Props> = ({ metaData }) => {
  console.log(metaData);

  const HeadProps = {
    url: getPath.resources("accordion"),
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
        <AccordionResources mt={{ base: "32px", md: "40px" }} metaData={metaData} />
      </Container>
    </ReferenceLayout>
  );
};

export default Resources;
