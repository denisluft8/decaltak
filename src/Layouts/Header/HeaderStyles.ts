import styled from "styled-components";
import { keyframes } from "styled-components";

interface HeaderProps {
  display?: string;
  color?: string;
}

const menuShow = keyframes`
0% {
        width: 0px;
      }
      100% {
        width: 80%;
      }
`;

export const HeaderSection = styled.section<HeaderProps>`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  width: 100%;
  height: 50px;
  padding: 8px;
  background: ${(props) => props.color};
  transition: 0.3s ease-in;
  display: ${(props) => (props.display === "flex" ? "none" : "flex")};
  z-index: 1;

  @media (max-width: 500px) {
    width: 80%;
    right: 0;
    background: #31422bd9;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 200px;
    transition: width 0.35s ease-in-out;
    animation-name: ${menuShow};
    animation-duration: 0.5s;
    display: ${(props) => props.display};
    overflow: hidden;
  }
`;

export const NavBar = styled.div`
  color: #e3e3e3;

  & > ul {
    display: flex;
    gap: 12px;
    list-style: none;
    font-weight: 900;
    font-size: 12px;
  }
  @media (max-width: 500px) {
    & > ul {
      flex-direction: column;
      align-items: center;
      font-size: 16px;
    }
  }
`;

export const LiStyled = styled.li`
  padding: 4px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #60bb46;
    transition: 0.2s ease-in;
  }

  & > a {
    text-decoration: none;
    color: #e3e3e3;
    &:hover {
      color: #60bb46;
      cursor: pointer;
      transition: 0.2s ease-in;
    }
  }
`;

export const LogoImg = styled.img`
  height: 50px;

  @media (max-width: 320px) {
    height: 45px;
  }
  @media (max-width: 500px) {
    margin-top: 12px;
  }
`;

interface BurguerProps {
  transform1?: string;
  transform2?: string;
  opacity?: string;
}

export const BurguerContainer = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: inline-block;
    cursor: pointer;
    position: fixed;
    right: 0;
    top: 0;
    margin-top: 12px;
    padding-right: 6px;
    z-index: 2;
  }
`;
export const Burguer1 = styled.div<BurguerProps>`
  @media (max-width: 500px) {
    width: 35px;
    height: 5px;
    background-color: #60bb46;
    margin: 6px 0;
    transition: 0.4s;
    transform: ${(props) => props.transform1};
  }
`;
export const Burguer2 = styled.div<BurguerProps>`
  @media (max-width: 500px) {
    width: 35px;
    height: 5px;
    background-color: #60bb46;
    margin: 6px 0;
    transition: 0.4s;
    opacity: ${(props) => props.opacity};
  }
`;
export const Burguer3 = styled.div<BurguerProps>`
  @media (max-width: 500px) {
    width: 35px;
    height: 5px;
    background-color: #60bb46;
    margin: 6px 0;
    transition: 0.4s;
    transform: ${(props) => props.transform1};
  }
`;
