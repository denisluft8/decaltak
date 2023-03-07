import styled from "styled-components";

export const HomeContainer = styled.div``;
export const AgendeContainer = styled.div`
  color: #e3e3e3;
  text-align: center;
  border-bottom: 2px solid #60bb46;
  padding-bottom: 28px;

  

  & > h2 {
    padding: 8px;
  }

  & > h2 > span {
    color: #60bb46;
    border-bottom: 2px solid #60bb46;
  }
  & > h3 > a {
    color: #60bb46;
    border-bottom: 2px solid #60bb46;

    &:hover {
      color: #4f9c39;
      border-bottom: 2px solid #4f9c39;
    }
  }
`;
