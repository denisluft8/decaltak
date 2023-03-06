import { Layout } from "./Layouts";
import { HomePage } from "./Pages";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
