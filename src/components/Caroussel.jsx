import { useState } from "react";
import arrow from "../assets/next.svg";
import "../styles/Caroussel.css";

const Caroussel = ({ pictures }) => {
  const [index, setIndex] = useState(0);
  function switchPicture(next) {
    if (next) {
      index === pictures.length - 1 ? setIndex(0) : setIndex(index + 1);
    } else {
      index === 0 ? setIndex(pictures.length - 1) : setIndex(index - 1);
    }
  }
  return (
    <div className="carousselContainer">
      <img src={pictures[index]} alt="carrouselPicture" className="carousselPicture" />
      <div className="carousselControl">
        <img onClick={() => switchPicture(false)} alt="arrowBack" className="back" src={arrow} />

        <img onClick={() => switchPicture(true)} alt="arrowNext" className="next" src={arrow} />
      </div>
    </div>
  );
};

export default Caroussel;
