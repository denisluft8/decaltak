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

  
 
`;

export const NavBar = styled.div`
  color: ${(props) => props.color};

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
    color: ${(props) => props.color};
    cursor: pointer;
    border-bottom: 2px solid ${(props) => props.color};
    transition: 0.2s ease-in;
  }
`;

export const LogoImg = styled.img`
  height: 50px;
`;
