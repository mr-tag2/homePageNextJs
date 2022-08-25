import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RootContextProvider } from "../contexts/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootContextProvider>
      <Component {...pageProps} />
    </RootContextProvider>
  );
}

export default MyApp;
