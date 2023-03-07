import styled from "styled-components";

interface MapProps {
  height: string;
  width: string;
}

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContact = styled.h3`
  width: 60%;
  align-self: center;
  text-align: center;
  color: #e3e3e3;

  @media (max-width: 500px) {
    width: 70%;
  }
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;

  & > form {
    /* border: 2px solid #60bb46; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    width: 60%;

    @media (max-width: 500px) {
      width: 80%;
    }

    & > input {
      border: 2px solid #60bb46;
      background-color: transparent;
      border-radius: 10px;
      color: #60bb46;
      padding-left: 8px;
      font-size: 16px;
      height: 40px;
      margin: 12px;
      width: 100%;
    }

    & > :focus {
      color: #e3e3e3;

      &::placeholder {
        color: #e3e3e3;
      }
    }

    & > ::placeholder {
      color: #60bb46;
    }

    & > textarea {
      border: 2px solid #60bb46;
      background-color: transparent;
      border-radius: 10px;
      color: #60bb46;
      padding-top: 12px;
      padding-left: 8px;
      font-size: 20px;
      height: 40px;
      margin: 12px;
      width: 100%;
      height: 140px;
      resize: none;

      & > ::placeholder {
        font-size: 18px;
      }
    }

    & > button {
      border: 2px solid #60bb46;
      border-radius: 10px;
      color: #60bb46;
      background: transparent;
      font-weight: 800;
      height: 36px;
      width: 100px;

      &:hover {
        background: #60bb46;
        color: #121214;
        cursor: pointer;
        transition: 0.2s ease;
      }
    }
  }
`;

export const RedesDiv = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  width: 70%;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const IconsDiv = styled.div`
  align-self: center;
  & > a > img {
    width: 80px;
    padding: 12px;
  }
  & > a > img:hover {
    width: 92px;
    padding: 6px;
    transition: 0.2s ease;
  }

  @media (max-width: 500px) {
    & > a > img {
      width: 60px;
    }
  }
`;

export const MapDiv = styled.div`
  margin-top: 40px;
  color: #e3e3e3;
  width: 100%;
  border-top: 4px solid #60bb46;
  text-align: center;

  & > iframe {
    border: 4px solid #60bb46;
    width: 570px;
    height: 300px;

    @media (max-width: 500px) {
      width: auto;
      height: auto;
    }
  }
`;
