import { createGlobalStyle } from "styled-components";
// Create a `GlobalStyles` component.
// I usually already have this, to include a CSS
// reset, set border-box, and other global concerns.
const GlobalStyles = createGlobalStyle`
  html, p, input, textarea {
    --color-text: #000000;
    --color-background: #FFFFFF;
    --color-primary: #343264;
    --color-red: #FF6E3E;
    --color-border: #C4C4C4;
    --color-text-bg: #FFF;
    --color-selected: #1DA1F2;
    --color-feed-bg: #FBFBFB;
    --color-search-bg: #F7F7F6;
    --color-comment-bg: #F0F2F5;
    --color-post-bg: #FFF;
    --color-post-area-bg: #F7F7F6;
    --color-hover: #F7F7F6;
    --color-pane: #F0F2F5;
    --c-border-color: #343264;
    --fade: .3s;
    --font: Roboto;
    --font-logo: system-ui;
    font-family: Roboto;
  }
  p {
    margin: 0;
    font-weight: 300;
  }
  # Firefox.
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: local('Roboto Thin'),
       local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v15/2tsd397wLxj96qwHyNIkxHYhjbSpvc47ee6xR_80Hnw.woff2) format('woff2'),
       url(https://fonts.gstatic.com/s/roboto/v15/vzIUHo9z-oJ4WgkpPOtg13YhjbSpvc47ee6xR_80Hnw.woff) format('woff');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'),
       local('Roboto-Light'),
       url(https://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfZBw1xU1rKptJj_0jans920.woff2) format('woff2'),
       url(https://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfbO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'),
       local('Roboto-Regular'),
       url(https://fonts.gstatic.com/s/roboto/v15/oMMgfZMQthOryQo9n22dcuvvDin1pK8aKteLpeZ5c0A.woff2) format('woff2'),
       url(https://fonts.gstatic.com/s/roboto/v15/CrYjSnGjrRCn0pd9VQsnFOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
}


# Chrome.
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: local('Roboto Thin'),
       local('Roboto-Thin'),
       url(https://fonts.gstatic.com/s/roboto/v15/2tsd397wLxj96qwHyNIkxHYhjbSpvc47ee6xR_80Hnw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'),
       local('Roboto-Light'),
       url(https://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfZBw1xU1rKptJj_0jans920.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'),
       local('Roboto-Regular'),
       url(https://fonts.gstatic.com/s/roboto/v15/oMMgfZMQthOryQo9n22dcuvvDin1pK8aKteLpeZ5c0A.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}


# Safari.
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: local('Roboto Thin'),
       local('Roboto-Thin'),
       url(https://fonts.gstatic.com/s/roboto/v15/Jzo62I39jc0gQRrbndN6nXYhjbSpvc47ee6xR_80Hnw.ttf) format('truetype');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'),
       local('Roboto-Light'),
       url(https://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfSZ2oysoEQEeKwjgmXLRnTc.ttf) format('truetype');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'),
       local('Roboto-Regular'),
       url(https://fonts.gstatic.com/s/roboto/v15/QHD8zigcbDB8aPfIoaupKOvvDin1pK8aKteLpeZ5c0A.ttf) format('truetype');
}


#IE.
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/roboto/v15/5YB-ifwqHP20Yn46l_BDhA.eot);
}


# Final:
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: local('Roboto Thin'),
       local('Roboto-Thin'),
       url(https://fonts.gstatic.com/s/roboto/v15/2tsd397wLxj96qwHyNIkxHYhjbSpvc47ee6xR_80Hnw.woff2) format('woff2'),
       url(https://fonts.gstatic.com/s/roboto/v15/vzIUHo9z-oJ4WgkpPOtg13YhjbSpvc47ee6xR_80Hnw.woff) format('woff'),
       url(https://fonts.gstatic.com/s/roboto/v15/Jzo62I39jc0gQRrbndN6nXYhjbSpvc47ee6xR_80Hnw.ttf) format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'),
       local('Roboto-Light'),
       url(https://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfZBw1xU1rKptJj_0jans920.woff2) format('woff2'),
       url(https://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfbO3LdcAZYWl9Si6vvxL-qU.woff) format('woff'),
       url(https://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfSZ2oysoEQEeKwjgmXLRnTc.ttf) format('truetype');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'),
       local('Roboto-Regular'),
       url(https://fonts.gstatic.com/s/roboto/v15/oMMgfZMQthOryQo9n22dcuvvDin1pK8aKteLpeZ5c0A.woff2) format('woff2'),
       url(https://fonts.gstatic.com/s/roboto/v15/CrYjSnGjrRCn0pd9VQsnFOvvDin1pK8aKteLpeZ5c0A.woff) format('woff'),
       url(https://fonts.gstatic.com/s/roboto/v15/QHD8zigcbDB8aPfIoaupKOvvDin1pK8aKteLpeZ5c0A.ttf) format('truetype'),
       url(https://fonts.gstatic.com/s/roboto/v15/5YB-ifwqHP20Yn46l_BDhA.eot);
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
`;

export default GlobalStyles;
