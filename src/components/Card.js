function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/heart.svg" alt="unliked"></img>
      </div>
      <img
        width={133}
        height={112}
        src="/img/sneakers/1.jpg"
        alt="sneaker1"
      ></img>
      <h5>Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <strong>$499</strong>
        </div>
        <img className="button" src="/plusItem.svg" alt="plus"></img>
      </div>
    </div>
  );
}

export default Card;
