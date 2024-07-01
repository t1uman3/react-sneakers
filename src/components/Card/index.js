import styles from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader";

function Card({
  id,
  onFavorite,
  title,
  imageUrl,
  price,
  onPlus,
  addFavorite = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(addFavorite);

  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={265}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
          <rect x="0" y="167" rx="7" ry="7" width="150" height="15" />
          <rect x="0" y="188" rx="7" ry="7" width="100" height="15" />
          <rect x="0" y="213" rx="7" ry="7" width="80" height="25" />
          <rect x="120" y="205" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              className="favorite"
              src={isFavorite ? "/img/liked.svg" : "/img/favorite.svg"}
              alt="heart"
            ></img>
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
        </>
      )}
    </div>
  );
}

export default Card;
