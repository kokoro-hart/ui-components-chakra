import { FC } from "react";

import { AppLayout } from "@/components/Layouts/AppLayout/AppLayout";
import { Head } from "@/components/Layouts/Head";
import { getPath } from "@/utils";

const Home: FC = () => {
  const HeadProps = {
    url: getPath.home,
    title: "開発者のためのUIメモ帳",
    description: "",
    ogImage: "",
  };
  return (
    <>
      <Head {...HeadProps} />
      <AppLayout>Home Page</AppLayout>
    </>
  );
};

export default Home;
