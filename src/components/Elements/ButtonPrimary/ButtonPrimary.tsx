import { As, Button } from "@chakra-ui/react";
import { FC, ReactNode, ReactElement } from "react";

type Props = {
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  as?: As;
  href?: string;
  target?: string;
};

export const ButtonPrimary: FC<Props> = ({
  children,
  leftIcon,
  as = "button",
  rightIcon,
  ...props
}) => {
  return (
    <Button
      as={as}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      border="1px solid"
      borderColor="gray.200"
      fontSize={{ base: "12px", md: "14px" }}
      height={9}
      lineHeight="1"
      px={{ base: "10px", md: "16px" }}
      {...props}
    >
      {children}
    </Button>
  );
};
