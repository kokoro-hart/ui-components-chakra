import { As, InputGroup as ChakraInputGroup, InputRightElement } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import { Icon } from "./Icon";
import { Input, InputProps } from "./Input";

export type InputGroupProps = InputProps & {
  icon?: As;
  iconColor?: string;
};

export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ icon, iconColor, ...props }, ref) => {
    return (
      <ChakraInputGroup>
        <Input {...props} ref={ref} />

        {icon && (
          <InputRightElement>
            <Icon as={icon} color={iconColor} />
          </InputRightElement>
        )}
      </ChakraInputGroup>
    );
  },
);

InputGroup.displayName = "InputGroup";
