import { Layout } from "./Layouts/Layout";
import { About, HomePage, Gallery, Contact } from "./Pages";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <HomePage />
        <About />
        <Gallery />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
