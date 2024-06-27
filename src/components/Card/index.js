import styles from "./Card.module.scss";

console.log(styles);

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/heart.svg" alt="unliked"></img>
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="sneaker1"></img>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <strong>${props.price}</strong>
        </div>
        <img
          className="button"
          src="/plusItem.svg"
          alt="plus"
          onClick={props.onClick}
        ></img>
      </div>
    </div>
  );
}

export default Card;
