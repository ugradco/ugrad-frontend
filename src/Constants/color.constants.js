import { createGlobalStyle } from "styled-components";
// Create a `GlobalStyles` component.
// I usually already have this, to include a CSS
// reset, set border-box, and other global concerns.
const GlobalStyles = createGlobalStyle`
  html {
    --color-text: #000000;
    --color-background: #FFFFFF;
    --color-primary: #343264;
    --color-border: #C4C4C4;
    --color-text-bg: #F0F2F5;
    --color-selected: #1DA1F2;
  }
`;

export default GlobalStyles;
