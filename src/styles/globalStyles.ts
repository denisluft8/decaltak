import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Source Code Pro', monospace;
  src: url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap');
}
*{
margin: 0;
  padding: 0;
}
#root{
    height: 100vh;
}
body {
   background: #020202;
  font-family: 'Source Code Pro', monospace;
}`;