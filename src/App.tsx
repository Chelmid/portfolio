import { useContext } from "react";
import "./App.css";
import { ModeLightDarkContext } from "./utils/ModeLightDark";
import { Body } from "./components/sections/Body";
import Header from "./components/sections/Header";

function App() {
  const { ModeLightDark } = useContext(ModeLightDarkContext);
  console.log(ModeLightDark);
  return (
    <div className={ModeLightDark ? "mode-dark" : "mode-light"}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
