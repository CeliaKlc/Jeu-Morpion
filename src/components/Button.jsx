import { useState } from "react";
import cercle from "./img/cercle.png";
import croix from "./img/croix.png";
import carre from "./img/Carre.png";

function Button({ turn, nextTurn }) {
  const [img, setImg] = useState(carre);
  const handleClick = () => {
    if (img === carre) {
      setImg(turn % 2 === 0 ? croix : cercle);
      nextTurn();
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src={img} alt="Button Image" />
      </button>
    </div>
  );
}

export default Button;
