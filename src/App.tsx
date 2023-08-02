import "./App.css";
import { Body } from "./components/sections/Body";
import { Container } from "./components/sections/Container";
import Header from "./components/sections/Header";

function App() {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default App;
