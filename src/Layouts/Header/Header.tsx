import { useState } from "react";
import { HeaderSection, LiStyled, LogoImg, NavBar } from "./HeaderStyles";
import logo from "../../assets/logo.svg";
import logoinversa from "../../assets/logoinversa.svg";

export const Header = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 58) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <HeaderSection color={color ? " #00F000d9" : "transparent"}>
      <LogoImg src={color ? logoinversa : logo} />
      <NavBar color={color ? " #000" : "#fff"}>
        <ul>
          <LiStyled color={color ? "#15290f" : "#60bb46"}>
            <a>SOBRE NÓS</a>
          </LiStyled>
          <LiStyled color={color ? "#15290f" : "#60bb46"}>
            <a>TRABALHOS</a>
          </LiStyled>
          <LiStyled color={color ? "#15290f" : "#60bb46"}>
            <a>CONTATO</a>
          </LiStyled>
        </ul>
      </NavBar>
    </HeaderSection>
  );
};
