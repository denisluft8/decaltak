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
    <HeaderSection color={color ? " #31422Bd9" : "transparent"}>
      <a href="#home">
        <LogoImg src={color ? logo : logo} />
      </a>
      <NavBar color={color ? " #000" : "#fff"}>
        <ul>
          <LiStyled>
            <a href="#about">SOBRE NÓS</a>
          </LiStyled>
          <LiStyled>
            <a href="#gallery">TRABALHOS</a>
          </LiStyled>
          <LiStyled>
            <a href="#contact">CONTATO</a>
          </LiStyled>
        </ul>
      </NavBar>
    </HeaderSection>
  );
};
