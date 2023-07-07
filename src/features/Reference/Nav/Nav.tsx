import { Box, Image, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

import { getPath } from "@/utils";

type Props = {
  slug: string;
};

export const Nav: FC<Props> = ({ slug }) => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const nav = [
    {
      name: "実装パターン",
      path: getPath.demos(slug),
    },
    {
      name: "デザインパターン",
      path: getPath.cases(slug),
    },
    {
      name: "参考記事",
      path: getPath.resources(slug),
    },
  ];

  return (
    <Box as="nav">
      <List display="flex" alignItems="center" borderBottom="2px solid" borderColor="border.100">
        {nav.map(({ name, path }) => (
          <ListItem
            key={name}
            h="100%"
            transform={isActive(path) ? "translateY(2px)" : "translateY(0px)"}
            borderBottom={isActive(path) ? "2px solid" : "none"}
            borderColor={isActive(path) ? "primary.500" : "none"}
          >
            <Link
              as={NextLink}
              h="100%"
              transform={isActive(path) ? "translateY(-1px)" : "translateY(0)"}
              color={isActive(path) ? "primary.500" : "text.300"}
              href={path}
              display="block"
              pb={{ base: "10px", md: "20px" }}
              _before={{
                md: {
                  content: `""`,
                  position: "absolute",
                  top: "-9px",
                  left: "0",
                  w: "100%",
                  h: "100%",
                  background: "background.100",
                  borderRadius: "4px",
                  transition: "opacity .4s cubic-bezier(0.22, 1, 0.36, 1)",
                  opacity: 0,
                  zIndex: -1,
                },
              }}
              _hover={{
                md: isActive(path) ? {} : { textDecoration: "none", _before: { opacity: 1 } },
              }}
              px={{ base: "15px", md: "20px" }}
              fontWeight={700}
              fontSize={{ base: "12px", md: "14px" }}
            >
              {name}
            </Link>
          </ListItem>
        ))}

        <ListItem h="100%">
          <Link
            h="100%"
            color={"text.300"}
            href={"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"}
            pb={{ base: "10px", md: "20px" }}
            pl={{ base: "15px", md: "20px" }}
            pr={{ base: "33px", md: "36px" }}
            fontWeight={700}
            fontSize={{ base: "12px", md: "14px" }}
            target="_blank"
            display="flex"
            alignItems="center"
            position="relative"
            _before={{
              md: {
                content: `""`,
                position: "absolute",
                top: "-9px",
                left: "0",
                w: "100%",
                h: "100%",
                background: "background.100",
                borderRadius: "4px",
                transition: "opacity .4s cubic-bezier(0.22, 1, 0.36, 1)",
                opacity: 0,
                zIndex: -1,
              },
            }}
            _hover={{ md: { textDecoration: "none", _before: { opacity: 1 } } }}
          >
            W3C
            <Image
              position="absolute"
              right={{ base: "12px", md: "7px" }}
              top={{ base: "-3px", md: "-5px" }}
              boxSize={{ base: "24px", md: "32px" }}
              src="/image/icon/blank.svg"
              alt=""
              htmlWidth="32"
              htmlHeight="32"
              aria-hidden="true"
            />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
