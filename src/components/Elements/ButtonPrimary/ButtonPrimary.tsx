import { As, Button, ChakraProps } from "@chakra-ui/react";
import { FC, ReactNode, ReactElement } from "react";

type Props = {
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  as?: As;
  href?: string;
  props?: ChakraProps;
};

export const ButtonPrimary: FC<Props> = ({
  children,
  leftIcon,
  as = "button",
  href,
  rightIcon,
  props,
}) => {
  return (
    <Button
      {...props}
      as={as}
      href={href}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      border="1px solid"
      borderColor="gray.200"
      fontSize="14px"
      height={9}
      lineHeight="1"
    >
      {children}
    </Button>
  );
};
