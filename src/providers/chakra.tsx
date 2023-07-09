import { ChakraProvider as Provider, extendTheme } from "@chakra-ui/react";
import * as React from "react";

import { colors } from "@/config";

type ChakraProviderProps = {
  children: React.ReactNode;
};

const theme = extendTheme({
  colors: colors,
  fonts: {
    body: '"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif',
  },
  styles: {
    global: {
      body: {
        color: "text.300",
        bg: "background.200",
        bgImage: 'url("/image/body.svg")',
        bgRepeat: "repeat",
        bgColor: "#f3f4f6",
        bgSize: "200px",
      },
    },
  },

  components: {
    Text: {
      variants: {
        outline: {
          fontSize: { base: "14px", md: "16px" },
        },
      },
    },
  },
});

export const ChakraProvider = ({ children }: ChakraProviderProps) => (
  <Provider theme={theme}>{children}</Provider>
);
