import { Box, Link, List, ListItem } from "@chakra-ui/react";
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
      name: "デモ",
      path: getPath.reference(slug),
    },
    {
      name: "導入事例",
      path: getPath.cases(slug),
    },
    {
      name: "UIフレームワーク",
      path: getPath.frameworks(slug),
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
              _hover={{ textDecoration: "none" }}
              px={{ base: "15px", md: "20px" }}
              fontWeight={700}
              fontSize={{ base: "12px", md: "14px" }}
            >
              {name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
