import styled from "styled-components";

export const GalleryWrap = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 0 auto;
  max-width: 90%;
  @media (max-width: 500px) {
    /* flex-wrap: nowrap; */
    /* flex-direction: column; */
    gap: 24px;
    /* width: 100%; */
  }
`;

export const SingleImg = styled.div`
  cursor: pointer;
  width: 300px;

  & > img {
    border: solid 2px #60bb46;
    border-radius: 2px;
    max-width: 100%;
  }

  & > img:hover {
    transform: scale(1.02);
    transition: 0.2s ease;
  }

  @media (max-width: 500px) {
    width: 40%;
    & > img {
      border: solid 2px #60bb46;
      border-radius: 2px;
      max-width: 100%;
    }
  }
`;

export const SliderWrap = styled.div`
  align-items: center;
  background-color: #191818;
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 999;

  & .btnClose,
  .btnPrev,
  .btnNext {
    color: #60bb46;
    cursor: pointer;
    height: 24px;
    opacity: 0.6;
    position: fixed;
    z-index: 9999;
  }

  & .btnClose:hover,
  .btnPrev:hover,
  .btnNext:hover {
    opacity: 1;
  }

  & > .btnClose {
    top: 40px;
    right: 40px;
  }

  & > .btnPrev {
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
  }

  & > .btnNext {
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
  }

  & > p {
    color: white;
  }
`;

export const FullScreenImage = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    max-height: 100%;
    max-width: 100%;
    pointer-events: none;
    user-select: none;
  }
`;
