import styled from "styled-components";

export const AboutDiv = styled.div`
  display: flex;
  width: 80%;
  padding: 12px;
  border-bottom: 5px solid #60bb46;
  border-right: 5px solid #60bb46;

  @media (min-width: 1250px) {
    width: 1000px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const ImgDiv = styled.div`
display: flex;
justify-content: center;
  & > img {
    height: 300px;
  }
  @media (max-width: 380px) {
    & > img {
      height: 260px;
    }
  }
  @media (max-width: 325px) {
    & > img {
      height: 230px;
    }
  }
  @media (max-width: 560px) {
    & > img {
      height: 300px;
    }
  }
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;

  & > h2 {
    color: #60bb46;
    margin-bottom: 12px;
    padding-bottom: 4px;
    border-bottom: 3px solid #60bb46;
  }
  & > p {
    margin-top: 20px;
    text-align: justify;
  }
`;
