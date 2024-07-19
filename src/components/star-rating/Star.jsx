import { useState } from "react";
import "./Style.css";
import Book from "../../assets/book3.jpg";
import { FaStar } from "react-icons/fa";

const Star = () => {
  const [rating, setRating] = useState(0);
  const onClicks = (getIndex) => {
    console.log(getIndex);
    setRating(getIndex);
  };

  return (
    <div className="bg">
      <h1>Rating the books </h1>
      <img className="img" src={Book} alt="img of book" />
      <div>
        <p>please rate this books</p>
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= rating ? "active" : "inactive"}
              onClick={() => onClicks(index)}
              size={35}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Star;
