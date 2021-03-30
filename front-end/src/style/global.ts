import { createGlobalStyle } from 'styled-components';
// #232129
export default createGlobalStyle`
  :root {
    --background: #282431;
    --background-secondary: #201e2a;
    --orange-primary: #ff9000;
    --white-orange: #f4ede8;
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
    font: 16px Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
