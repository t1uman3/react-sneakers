import { AppContext } from "../App";
import React from "react";
import Card from "../components/Card";

function Favorites() {
  const { favorites, onAddToFavorite, onAddToCart } =
    React.useContext(AppContext);
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-30">
        <h1>My Favorites</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card
            key={index}
            addFavorite={true}
            onFavorite={onAddToFavorite}
            onPlus={(obj) => onAddToCart(obj)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
