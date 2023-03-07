import { Layout } from "./Layouts";
import { About, HomePage } from "./Pages";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <HomePage />
        <About />
      </Layout>
    </>
  );
}

export default App;
