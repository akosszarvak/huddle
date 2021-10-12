import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import GlobalSytles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalSytles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer></Footer>
      </>
    </ThemeProvider>
  );
}

export default App;
