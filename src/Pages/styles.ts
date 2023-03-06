import styled from "styled-components";

export const Page = styled.section`
  align-items: center;
  background-color: #121214;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  height: ${(props) => (props.height ? props.height : "100%")};
`;
