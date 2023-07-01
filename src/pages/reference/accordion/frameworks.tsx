import React from "react";

import { Container } from "@/components/Layouts/Container";
import { ReferenceLayout } from "@/components/Layouts/ReferenceLayout";
import { Nav } from "@/features/Reference/Nav";

const Frameworks = () => {
  const fv = {
    thumbnail: {
      src: "/image/accordion.svg",
    },
    title: "Accordion",
    role: "連続する内容をまとめ、項目の全体像を先に伝える",
    impetus: "画面の読み込み中 / クリック",
  };
  return (
    <ReferenceLayout fv={fv}>
      <Container mt={{ base: "32px", md: "40px" }}>
        <Nav slug="accordion" />
      </Container>
    </ReferenceLayout>
  );
};

export default Frameworks;
