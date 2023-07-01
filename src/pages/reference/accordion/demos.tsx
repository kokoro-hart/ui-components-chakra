import React from "react";

import { ReferenceLayout } from "@/components/Layouts/ReferenceLayout";

const Demos = () => {
  const fv = {
    thumbnail: {
      src: "/image/accordion.svg",
    },
    title: "Accordion",
    role: "連続する内容をまとめ、項目の全体像を先に伝える",
    impetus: "画面の読み込み中 / クリック",
  };
  return <ReferenceLayout fv={fv}>Accordion</ReferenceLayout>;
};

export default Demos;
