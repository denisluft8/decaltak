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
    color: #e3e3e3;

    @media (max-width: 500px) {
      font-size: 12px;
      width: 70%;
    }
  }

  & > p {
    padding-right: 12px;
    text-align: end;
    color: #e3e3e3;

    & > a {
      text-decoration: none;
      color: #e3e3e3;

      &:hover {
        color: #60bb46;
      }
    }
    @media (max-width: 500px) {
      font-size: 10px;

      & > a {
        border-bottom: 0.1px solid #60bb46;
      }
    }
  }
`;
