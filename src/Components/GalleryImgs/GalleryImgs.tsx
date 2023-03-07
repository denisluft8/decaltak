import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  FullScreenImage,
  GalleryWrap,
  SingleImg,
  SliderWrap,
} from "./GalleryImgsStyled";

interface GalleryImgsProps {
  images: any;
}

export const GalleryImgs = ({ images }: GalleryImgsProps) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handlePrevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const handleNextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <SliderWrap>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={handlePrevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={handleNextSlide}
          />
          <FullScreenImage>
            <img src={images[slideNumber].img} alt="" />
          </FullScreenImage>
        </SliderWrap>
      )}
      <GalleryWrap>
        {images &&
          images.map((slide: any, index: number) => {
            return (
              <SingleImg key={index} onClick={() => handleOpenModal(index)}>
                <img src={slide.img} alt="" />
              </SingleImg>
            );
          })}
      </GalleryWrap>
    </div>
  );
};
