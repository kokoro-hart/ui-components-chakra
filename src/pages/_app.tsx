import type { AppProps } from "next/app";

import { ChakraProvider } from "@/providers";
import "ress";
import "@/styles/globals.css";
import { changeMetaViewport } from "@/utils";

const App = ({ Component, pageProps }: AppProps) => {
  if (globalThis) {
    if (typeof document !== "undefined") {
      changeMetaViewport();
    }
  }
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
