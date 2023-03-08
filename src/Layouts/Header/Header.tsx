import { useState } from "react";
import {
  Burguer1,
  Burguer2,
  Burguer3,
  BurguerContainer,
  HeaderSection,
  LiStyled,
  LogoImg,
  NavBar,
} from "./HeaderStyles";
import logo from "../../assets/logo.svg";

export const Header = () => {
  const [color, setColor] = useState(false);
  const [burguer, setBurguer] = useState(false);

  const handleClick = () => {
    burguer === false ? setBurguer(true) : setBurguer(false);
  };

  const changeColor = () => {
    if (window.scrollY >= 58) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <BurguerContainer onClick={() => handleClick()}>
        <Burguer1
          transform1={burguer ? "translate(0, 11px) rotate(-45deg)" : ""}
        ></Burguer1>
        <Burguer2 opacity={burguer ? "0" : "1"}></Burguer2>
        <Burguer3
          transform1={burguer ? "translate(0, -11px) rotate(45deg)" : ""}
        ></Burguer3>
      </BurguerContainer>
      <HeaderSection
        color={color ? " #31422Bd9" : "transparent"}
        display={burguer ? "flex" : "none"}
      >
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
    </>
  );
};
