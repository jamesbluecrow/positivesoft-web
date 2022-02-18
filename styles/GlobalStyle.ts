import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${({ theme }) => theme.fontFaces}
  :root {
    background: ${({ theme }) => theme.colorYin};
    font-family: ${({ theme }) => theme.fontFamilyRegular};
    color: ${({ theme }) => theme.colorYang};
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    margin: auto;
  }
`;
