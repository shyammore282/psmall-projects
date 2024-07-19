import { useState } from "react";
import "./style.css";
import { Ques } from "../../data/Data";

const Accordian = () => {
  const [singleSelection, setSingleSelection] = useState(null);

  const handleClick = (getId) => {
    setSingleSelection(getId === singleSelection ? null : getId);
  };
  return (
    <div>
      <div className="wrapper">
        <h1>Accordian question series</h1>
        <div className="">
          {Ques.map((Items) => {
            return (
              <div key={Items.id} className="content-box">
                <div className="title" onClick={() => handleClick(Items.id)}>
                  <h3>{Items.question}</h3>
                  <span>+</span>
                </div>
                {singleSelection === Items.id ? (
                  <div className="answer">{Items.answer}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
