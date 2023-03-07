import { Page } from "../styles";
import { GalleryDiv, GH2, GP } from "./GalleryStyles";
import {
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
} from "../../assets/gallery";
import { GalleryImgs } from "../../Components/GalleryImgs/GalleryImgs";

export const Gallery = () => {
  const galleryImages = [
    {
      img: g1,
    },
    {
      img: g2,
    },
    {
      img: g3,
    },
    {
      img: g4,
    },
    {
      img: g5,
    },
    {
      img: g6,
    },
    {
      img: g7,
    },
    {
      img: g8,
    },
    {
      img: g9,
    },
    {
      img: g10,
    },
    {
      img: g11,
    },
    {
      img: g12,
    },
  ];

  return (
    <Page id="gallery" height="fit-content" flexDir="column">
        <GH2>GALERIA</GH2>
        <GP>Veja alguns de nossos trabalhos:</GP>
      <GalleryDiv>
        <GalleryImgs images={galleryImages} />
      </GalleryDiv>
    </Page>
  );
};
