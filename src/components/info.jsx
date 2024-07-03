import React from "react";
import { AppContext } from "../App";

const Info = ({ title, description, image }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img width="120" src={image} alt="empty" className="mb-20" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="./arrow.svg" alt="arrow" />
        Return back
      </button>
    </div>
  );
};

export default Info;
