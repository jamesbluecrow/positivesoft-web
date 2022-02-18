import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
