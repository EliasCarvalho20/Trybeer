import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #39374b;
    --background-secondary: #1F1D2B;
    --orange-primary: #EA7C69;
    --white-orange: #ded9d8;
    --red-error: #c53030;
    --grey: #726d6c;
    --white: #fff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: var(--background);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Barlow, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
