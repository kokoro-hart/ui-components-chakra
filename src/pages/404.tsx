import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SkipNavContent,
  SkipNavLink,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

import { Footer } from "@/components/Elements/Footer";
import { Header } from "@/components/Elements/Header";
import { Head } from "@/components/Layouts/Head";
import { getPath } from "@/utils";

const NotFound: FC = () => {
  const HeadProps = {
    url: getPath.home,
    title: "ページが見つかりませんでした。- 開発者のUIメモ帳",
    description: "お探しのページが見つかりませんでした。",
    ogImage: "",
  };
  return (
    <>
      <Head {...HeadProps} />
      <SkipNavLink>メインコンテンツにスキップ</SkipNavLink>
      <Header />

      <Flex w="100%">
        <SkipNavContent />
        <Container
          as="main"
          mt="75px"
          pt={{ base: "32px", md: "47px" }}
          px={{ base: "20px", md: "40px" }}
          h="calc(100vh - 75px * 2)"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          maxW="1200"
          gap="20px"
        >
          <Heading
            as="h1"
            fontSize={{ base: "84px", md: "96px" }}
            display="flex"
            gap="10px"
            alignItems="center"
          >
            404
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            color="#65717b"
            fontWeight={700}
            textAlign="center"
            lineHeight="1.9"
          >
            お探しのページが見つかりませんでした。
            <br />
            このページはすでに削除されているか、URLが間違っている可能性があります。
          </Text>
          <Image
            src="/image/icon/404.svg"
            alt=""
            w="100%"
            maxW="336px"
            htmlWidth="971"
            htmlHeight="628"
            aria-hidden="true"
          />
          <Button
            as="a"
            href={getPath.home}
            size="lg"
            mt="12px"
            color="background.100"
            bg="primary.300"
          >
            トップへ戻る
          </Button>
        </Container>
      </Flex>
      <Footer />
    </>
  );
};

export default NotFound;
