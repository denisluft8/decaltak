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
  scroll-behavior: smooth;


}
#root{
    height: 100vh;
}
body {
  background-color: #121214;
  font-family: 'Hind Siliguri', sans-serif;
  line-height: 28px;
  min-height: 100%;


  ::-webkit-scrollbar {
        width: 6px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        background: #191818;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #60bb46;
        border-radius: 20px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #52a13b;
    }

}`;
