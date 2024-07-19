import { useState } from "react";
import Model from "./Model";

const ModelTest = () => {
  const [showModelPopUp, setShowModelPopUp] = useState(false);

  const handleModelPopUp = () => {
    setShowModelPopUp(!showModelPopUp);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "8px 20px",
            borderRadius: "10px",
            border: "1px solid",
            cursor: "pointer",
          }}
          onClick={handleModelPopUp}
        >
          show the custom model
        </button>
      </span>

      {showModelPopUp && <Model />}
    </div>
  );
};

export default ModelTest;
