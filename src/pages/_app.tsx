// TODO: あとて↓のコメントアウトを外してChakraBaseProviderを使ってみる

// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
// import chakraTheme from "@chakra-ui/theme";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "ress";
import "@/styles/globals.css";

// const { Button } = chakraTheme.components;
// const theme = extendBaseTheme({
//   components: {
//     Button,
//   },
// });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
