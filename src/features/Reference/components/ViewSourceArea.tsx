import { ChakraProps, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

import { ButtonPrimary } from "@/components/Elements/ButtonPrimary";
import { LinkMore } from "@/components/Elements/LinkMore";

type ViewSourceAreaProps = ChakraProps & {
  react?: string;
  vanilla?: string;
  design?: string;
};

export const ViewSourceArea: FC<ViewSourceAreaProps> = ({ react, vanilla, design, ...props }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      pr="10px"
      flexWrap="wrap"
      gap="12px"
      {...props}
    >
      <Flex alignItems="center" gap={3}>
        {react && (
          <ButtonPrimary
            leftIcon={<FaReact color="#61DBFB" size={18} />}
            rightIcon={<BsBoxArrowUpRight size={12} />}
            as="a"
            href={react}
            target="_blank"
          >
            View Source
          </ButtonPrimary>
        )}
        {vanilla && (
          <ButtonPrimary
            leftIcon={<RiJavascriptFill color="#F0DB4F" size={20} />}
            rightIcon={<BsBoxArrowUpRight size={12} />}
            as="a"
            href={vanilla}
            target="_blank"
          >
            View Source
          </ButtonPrimary>
        )}
      </Flex>
      {design && <LinkMore href={design}>デザイン事例を見る</LinkMore>}
    </Flex>
  );
};
