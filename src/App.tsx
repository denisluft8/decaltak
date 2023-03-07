import { Layout } from "./Layouts";
import { About, HomePage } from "./Pages";
import { Gallery } from "./Pages/Gallery/Gallery";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <HomePage />
        <About />
        <Gallery />
      </Layout>
    </>
  );
}

export default App;
