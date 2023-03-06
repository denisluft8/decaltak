import { useState, useEffect } from "react";
import { Slide, SliderContainer, SlideShowSlider } from "./SliderStyles";

const sliderImg = [
  { img: "src/assets/slider1.png" },
  { img: "src/assets/slider2.png" },
  { img: "src/assets/slider3.png" },
  { img: "src/assets/slider4.png" },
  { img: "src/assets/slider5.png" },
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
