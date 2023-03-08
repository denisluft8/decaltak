import { useState, useEffect } from "react";
import { Slide, SliderContainer, SlideShowSlider } from "./SliderStyles";
import { slider1, slider2, slider3, slider4, slider5 } from "../../assets";

const sliderImg = [
  { img: slider1 },
  { img: slider2 },
  { img: slider3 },
  { img: slider4 },
  { img: slider5 },
];
const delay = 10000;

export const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === sliderImg.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index]);

  return (
    <SliderContainer>
      <SlideShowSlider
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {sliderImg &&
          sliderImg.map((slide: any, index: number) => {
            return <Slide src={slide.img} key={index} />;
          })}
      </SlideShowSlider>
    </SliderContainer>
  );
};
