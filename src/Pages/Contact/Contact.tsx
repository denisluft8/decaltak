import { Page } from "../styles";
import instagram from "../../assets/instagram.svg";
import whats from "../../assets/whats.svg";
import facebook from "../../assets/facebook.svg";
import {
  ContactDiv,
  IconsDiv,
  MapDiv,
  Modal,
  RedesDiv,
  TextContact,
} from "./ContactStyles";
import { Footer } from "../../Layouts/Footer/Footer";

export const Contact = () => {
  return (
    <>
      <Page id="contact" flexDir="column" height="fit-content">
        <ContactDiv>
          <TextContact>
            Nos mande uma mensagem abaixo que assim que possivel responderemos.
          </TextContact>
          <Modal>
            <form>
              <input type="text" placeholder="NOME" />
              <input type="text" placeholder="E-MAIL" />
              <textarea placeholder="MENSAGEM" className="msg" />
              <button type="submit">ENVIAR</button>
            </form>
          </Modal>
        </ContactDiv>
        <RedesDiv>
          <TextContact>Ou Entre em contato pelas nossas redes:</TextContact>
          <IconsDiv>
            <a href="https://www.facebook.com/DecaltakOficial/" target="_blank">
              <img src={facebook} />
            </a>
            <a
              href="https://wa.me/55999777436?text=Nos%20mande%20uma%20mensagem%20e%20assim%20que%20possivel%20vamos%20te%20atender"
              target="_blank"
            >
              <img src={whats} />
            </a>
            <a
              href="https://www.instagram.com/decaltakoficial/"
              target="_blank"
            >
              <img src={instagram} />
            </a>
          </IconsDiv>
        </RedesDiv>
        <MapDiv>
          <br />
          <h3>Endereço:</h3>
          <p>Av. Flores da Cunha, 3338 - Glória, </p>
          <p>CEP 95000-000, Carazinho - Rio Grande do Sul</p>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.5092610644947!2d-52.79990972948863!3d-28.300614827637144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd31640792b3c1%3A0xefed309673b5077d!2sDecaltak!5e1!3m2!1spt-BR!2sbr!4v1678211883692!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapDiv>
      </Page>
      <Footer />
    </>
  );
};
