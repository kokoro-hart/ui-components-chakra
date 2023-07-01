import type { AppProps } from "next/app";

import { ChakraProvider } from "@/providers";
import "ress";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
