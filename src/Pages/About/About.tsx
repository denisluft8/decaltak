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
            A Decaltak é uma empresa de comunicação visual com sede no Rio
            Grande do Sul, fundada em 2013 por uma família empreendedora. Seu
            compromisso com a qualidade é amplamente reconhecido, e a empresa é
            conhecida por fornecer serviços personalizados e inovadores de alta
            qualidade. Com uma equipe altamente qualificada, a Decaltak oferece
            soluções criativas e dinâmicas que atendem às necessidades de seus
            clientes. A excelência é a palavra de ordem em cada projeto
            executado, e a empresa tem um portfólio impressionante de casos de
            sucesso que demonstram sua capacidade de entregar resultados
            excepcionais.
          </p>
        </TextDiv>
      </AboutDiv>
    </Page>
  );
};
