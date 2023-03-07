import styled from "styled-components";

export const SliderContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 600px;
  @media (min-width: 1250px) {
    max-width: 1000px;
    padding-top: 20px;

  }
`;
export const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: ease;
  display: flex;
`;
export const Slide = styled.img`
  display: inline-block;
  width: 100%;
  /* border-radius: 40px; */
  @media (max-width: 500px) {
    border-radius: 0px;
  }
`;
