import { useState } from "react";
import "./style.css";

const Model = () => {
  const [popUp, setPopUp] = useState(true);
  console.log(popUp);
  return (
    <div className="model-container">
      {popUp ? (
        <div className="model-section">
          <div className="header">
            <h2>Header Section</h2>
            <span className="cross-icon" onClick={() => setPopUp(!popUp)}>
              &times;
            </span>
          </div>
          <div className="body">
            <h2>Body section</h2>
          </div>
          <div className="footer">
            <h2>Footer section</h2>
          </div>
        </div>
      ) : null}
      {/* <div className="model-section">
        <div className="header">
          <h2>Header Section</h2>
          <span className="cross-icon" onClick={() => setPopUp(!popUp)}>
            &times;
          </span>
        </div>
        <div className="body">
          <h2>Body section</h2>
        </div>
        <div className="footer">
          <h2>Footer section</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Model;
