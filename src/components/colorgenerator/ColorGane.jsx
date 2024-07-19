import { useEffect, useState } from "react";
import "./style.css";

const ColorGane = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState(["#000000"]);

  const randomUtility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
      colorCode += hex[randomUtility(hex.length)];
    }
    setColor(colorCode);
  };

  const handleRgbColor = () => {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);

    let rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleRgbColor();
    } else {
      handleHexColor();
    }
  }, [typeOfColor]);
  return (
    <div
      style={{
        width: "100%",
        height: "25vh",
        backgroundColor: color,
      }}
    >
      <div
        style={{
          padding: "20px",
        }}
      >
        <h3>Ganerate The Color Here</h3>
        <button className=" btn" onClick={() => setTypeOfColor("hex")}>
          HEX color
        </button>
        <button className=" btn" onClick={() => setTypeOfColor("rgb")}>
          RGB Color
        </button>
        <button
          className=" btn"
          onClick={typeOfColor === "rgb" ? handleRgbColor : handleHexColor}
        >
          color ganerator
        </button>
        <h2 className=" text">{typeOfColor}</h2>
        <p className=" text">{color}</p>
      </div>
    </div>
  );
};

export default ColorGane;
