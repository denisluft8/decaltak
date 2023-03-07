import { Page } from "../styles";
import { AboutDiv, ImgDiv, TextDiv } from "./AboutStyles";
import fachada from "../../assets/fachada.png";

export const About = () => {
  return (
    <Page id="about" height="50%" bgColor="#e5e5e5">
      <AboutDiv>
        <ImgDiv>
          <img src={fachada} />
        </ImgDiv>
        <TextDiv>
          <h2>Quem somos nós:</h2>
          <p>
            Fundada oficialmente em 2013, a Decaltak é uma empresa familiar
            gaúcha de comunicação visual conhecida por oferecer um “um trabalho
            de alta qualidade”. A empresa tem uma equipe de funcionários
            qualificados , onde executam projetos inovadores, dinâmicos e
            totalmente personalizados. Excelência e criatividade são premissas
            obrigatórias em cada projeto executado pela equipe da Decaltak , que
            acumula em seu portfólio inúmeros cases de sucesso.
          </p>
        </TextDiv>
      </AboutDiv>
    </Page>
  );
};
