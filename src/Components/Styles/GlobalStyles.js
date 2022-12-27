import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



/* Reset margins */

body,
h1,
h2,
h3,
h4,
p,
figure,
picture {
  margin: 0;
}

/* Body set up */

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  line-height: 1.5;
}

body {
  line-height: 1.5;
  letter-spacing: 1px;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
  background-color: var(--main-black);
}



/* Forms */

input,
button,
textarea,
select,
option {
  font: inherit;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

:root {
  

  --main-black: #1C1C1C;
  --secondary-black: #242424;
  --main-white: #ededed;
  --gray: #ededed4f;
  --yellow: #F4B301;
 
}
`;
