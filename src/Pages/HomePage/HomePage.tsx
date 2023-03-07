import { Slider } from "../../Components";
import { Page } from "../styles";
import { AgendeContainer, HomeContainer } from "./HomePageStyles";

export const HomePage = () => {
  return (
    <Page id="home" height={"50%"}>
      <HomeContainer>
        <Slider />
        <h1 style={{ visibility: "hidden" }}>Decaltak</h1>
        <AgendeContainer>
          <h2>
            Agende um <span>orçamento</span> pelo número 54 3331-2843
          </h2>
          <h3>
            ou entre em contato pelo <a href="https://wa.me/55999777436?text=Nos%20mande%20uma%20mensagem%20e%20assim%20que%20possivel%20vamos%20te%20atender" target="_blank">WhatsApp</a>
          </h3>
        </AgendeContainer>
      </HomeContainer>
    </Page>
  );
};
