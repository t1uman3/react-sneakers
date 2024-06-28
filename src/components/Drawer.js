function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer ">
        <h2 className="d-flex justify-between mb-20">
          Cart
          <img
            onClick={onClose}
            className="removeBtn"
            width={20}
            height={20}
            src="/cancel.svg"
            alt="cancel"
          ></img>
        </h2>
        <div className="Items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={80}
                height={70}
                src={obj.imageUrl}
                alt="sneakers"
              ></img>
              <div className="cartItemImg"></div>
              <div className="mr-20">
                <p className="m-5">{obj.title}</p>
                <strong>${obj.price}</strong>
              </div>
              <img
                className="removeBtn"
                width={15}
                height={15}
                src="/cancel.svg"
                alt="cancel"
              ></img>
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total Price:</span>
              <div></div>
              <b>$2500</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>$100</b>
            </li>
          </ul>
          <button className="greenButton">
            CheckOut<img src="/arrow.svg" alt="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
