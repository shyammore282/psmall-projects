import "./App.css";
import Accordian from "./components/accordian/Accordian";
import ColorGane from "./components/colorgenerator/ColorGane";
import ModelTest from "./components/custom-model/ModelTest";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import Star from "./components/star-rating/Star";

function App() {
  return (
    <>
      <div className="container">
        <Star />
        <Accordian />
        <ColorGane />
        <LightDarkMode />
        <ModelTest />
      </div>
    </>
  );
}

export default App;
