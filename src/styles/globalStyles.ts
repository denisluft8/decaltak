import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Hind Siliguri', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
}
*{
margin: 0;
  padding: 0;
}
html{
  min-height: 100%;

}
#root{
    height: 100vh;
}
body {
  background-color: #121214;
  font-family: 'Hind Siliguri', sans-serif;
  line-height: 28px;
  min-height: 100%;

}`;
