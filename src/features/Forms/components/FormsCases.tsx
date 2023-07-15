import { Box, ChakraProps, Grid, Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";

import { VideoModalTrigger } from "@/features/Reference/components/VideoModalTrigger";

export const FormsCases: FC<ChakraProps> = ({ ...props }) => {
  const cases = {
    goodpatch: {
      heading: "Goodpatch Inc.",
      video: "https://i.gyazo.com/e26fece217b714de75ab8247e07557a1.mp4",
      site: "https://goodpatch.com/",
    },
    richka: {
      heading: "RICHKA Inc.",
      video: "https://i.gyazo.com/f8a3267452e50ea35f054ec18159d4ce.mp4",
      site: "https://richka.co.jp/",
    },
    zozo: {
      heading: "zozotown",
      video: "https://i.gyazo.com/b67ebe9ad211ccdfafba753b31cf52b7.mp4",
      site: "https://zozo.jp/_help/default.html?p_no=1",
    },
  };

  const { goodpatch, richka, zozo } = cases;
  return (
    <>
      <Stack spacing={{ base: "64px", md: "84px" }} {...props}>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 お問い合わせ
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)" }}
            w={{ base: "100%", md: "70%" }}
            gap={{ base: 4, md: 6 }}
            mt={{ base: "24px", md: "32px" }}
          >
            <VideoModalTrigger
              heading={goodpatch.heading}
              videoSrc={goodpatch.video}
              siteSrc={goodpatch.site}
              width={296}
              height={555}
            />
            <VideoModalTrigger
              heading={richka.heading}
              videoSrc={richka.video}
              siteSrc={richka.site}
              width={296}
              height={555}
            />
          </Grid>
        </Box>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 ログイン
          </Heading>

          <VideoModalTrigger
            w="100%"
            mt={{ base: "24px", md: "32px" }}
            heading={zozo.heading}
            videoSrc={zozo.video}
            siteSrc={zozo.site}
            width={880}
            height={593}
            size="5xl"
          />
        </Box>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 会員登録
          </Heading>

          <VideoModalTrigger
            w="100%"
            mt={{ base: "24px", md: "32px" }}
            heading={zozo.heading}
            videoSrc={zozo.video}
            siteSrc={zozo.site}
            width={880}
            height={593}
            size="5xl"
          />
        </Box>
      </Stack>
    </>
  );
};
