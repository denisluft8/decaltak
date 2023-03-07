import styled from "styled-components";

export const AboutDiv = styled.div`
  display: flex;
  width: 80%;
  padding: 12px;
  border-bottom: 5px solid #60bb46;
  border-right: 5px solid #60bb46;
`;
export const ImgDiv = styled.div`
  & > img {
    height: 300px;
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
