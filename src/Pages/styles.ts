import styled from "styled-components";

interface SectionProps {
  bgColor?: string;
  height?: string;
  flexDir?: string;
}

export const Page = styled.section<SectionProps>`
  align-items: center;
  background: ${(props) => (props.bgColor ? props.bgColor : "#121214")};
  display: flex;
  flex-direction: ${(props) => (props.flexDir ? props.flexDir : "row")};
  justify-content: center;
  padding: 52px 0px;
  height: ${(props) => (props.height ? props.height : "100%")};

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (orientation: landscape) {
    height: fit-content;
    padding: 70px 0px;
  }
`;
