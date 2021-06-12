import { createGlobalStyle } from "styled-components";
// Create a `GlobalStyles` component.
// I usually already have this, to include a CSS
// reset, set border-box, and other global concerns.
const GlobalStyles = createGlobalStyle`
  html, p, input {
    --color-text: #000000;
    --color-background: #FFFFFF;
    --color-primary: #343264;
    --color-border: #C4C4C4;
    --color-text-bg: #F0F2F5;
    --color-selected: #1DA1F2;
    --color-feed-bg: #FBFBFB;
    --color-search-bg: #F7F7F6;
    --color-post-bg: #F0F2F5;
    --color-post-area-bg: #F7F7F6;
    --color-hover: #F7F7F6;
    --color-pane: #F0F2F5;
    --c-border-color: #343264;
    --fade: .3s;
    --font: Roboto;
    --font-logo: system-ui;
    font-family: var(--font);
  }
`;

export default GlobalStyles;
