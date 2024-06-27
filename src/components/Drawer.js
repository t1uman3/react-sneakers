function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer ">
        <h2 className="d-flex justify-between mb-20">
          Cart
          <img
            className="removeBtn"
            width={20}
            height={20}
            src="/cancel.svg"
            alt="cancel"
          ></img>
        </h2>
        <div className="Items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={80}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            ></img>
            <div className="cartItemImg"></div>

            <div className="mr-20">
              <p className="m-5">Nike Blazer Mid Suede</p>
              <strong>$499</strong>
            </div>
            <img
              className="removeBtn"
              width={15}
              height={15}
              src="/cancel.svg"
              alt="cancel"
            ></img>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={80}
              height={70}
              src="/img/sneakers/2.jpg"
              alt="sneakers"
            ></img>
            <div className="cartItemImg"></div>

            <div className="mr-20">
              <p className="m-5">Nike Blazer Mid Suede</p>
              <strong>$499</strong>
            </div>
            <img
              className="removeBtn"
              width={15}
              height={15}
              src="/cancel.svg"
              alt="cancel"
            ></img>
          </div>
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
