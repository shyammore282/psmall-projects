import { useState } from "react";
import useLocalStorage from "./costumhook/useLocalStorage";
import "./theme.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [btnText, setBtnText] = useState("On Dark Mode");

  const handleDarkLightMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setBtnText(btnText === "On Light Mode" ? "On Dark Mode" : "On Light Mode");
  };
  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <h2>Hello World !</h2>
      <span>
        <button className=" btn" onClick={handleDarkLightMode}>
          {btnText}
        </button>
      </span>
    </div>
  );
};

export default LightDarkMode;
