import styled from "styled-components";

interface HeaderProps {
  visibility?: string;
}

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

  @media (max-width: 500px) {
    width: 80%;
    right: 0;
    background: #31422bd9;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 200px;
  }
`;

export const NavBar = styled.div`
  color: #e3e3e3;

  & > ul {
    display: flex;
    gap: 12px;
    list-style: none;
    font-weight: 900;
  }
  @media (max-width: 500px) {
    & > ul {
      flex-direction: column;
      align-items: center;
      font-size: 20px;
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
`;
