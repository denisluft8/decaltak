import styled from "styled-components";

export const FooterSec = styled.section`
  background: #31422bd9;
  height: 52px;
  left: 0;
  position: relative;
  bottom: 0;
  width: 100%;
  margin: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h2 {
    font-size: 18px;
    padding-left: 12px;
    text-align: center;
  }

  & > p {
    padding-right: 12px;
    text-align: end;

    & > a {
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #60bb46;
      }
    }
  }
`;
