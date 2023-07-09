import { Link } from "@chakra-ui/react";
import { css } from "@emotion/react";
import NextLink from "next/link";
import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";

const styles = css`
  svg {
    transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover {
    svg {
      transform: translateX(4px);
    }
    color: var(--chakra-colors-primary-400);
  }
`;

type Props = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
};

export const LinkMore: FC<Props> = ({ children, ...props }) => {
  return (
    <Link
      {...props}
      as={NextLink}
      fontSize={{ base: "14px" }}
      lineHeight="1"
      fontWeight={700}
      display="flex"
      gap="3px"
      css={styles}
      py="10px"
    >
      {children}
      <BsArrowRight size={14} />
    </Link>
  );
};
