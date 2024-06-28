import styles from "./Card.module.scss";
import React from "react";

function Card({ onFavorite, title, imageUrl, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/heart.svg" alt="unliked"></img>
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneaker1"></img>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <strong>${price}</strong>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? "./checked.svg" : "./plusItem.svg"}
          alt="plus"
          onClick={onClickPlus}
        ></img>
      </div>
    </div>
  );
}

export default Card;
