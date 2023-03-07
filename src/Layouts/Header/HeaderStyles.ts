import styled from "styled-components";

export const HeaderSection = styled.section`
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
  z-index: 1;
`;

export const NavBar = styled.div`
  color: #fff;

  & > ul {
    display: flex;
    gap: 12px;
    list-style: none;
    font-weight: 900;
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
    color: #fff;
    &:hover {
      color: #60bb46;
      cursor: pointer;
      transition: 0.2s ease-in;
    }
  }
`;

export const LogoImg = styled.img`
  height: 50px;
`;
