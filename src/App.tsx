import "./App.css";
import { Body } from "./components/sections/Body";
import { Container } from "./components/sections/Container";
import Header from "./components/sections/Header";
import { ScrollBarPositionProvider } from "./utils/ScrollBarPosition";
import "./utils/i18next";

function App() {
  return (
    <ScrollBarPositionProvider>
      <Container>
        <Header />
        <Body />
      </Container>
    </ScrollBarPositionProvider>
  );
}

export default App;
