import React from "react";
import Info from "../info";
import axios from "axios";

import { useCart } from "../../hooks/useCart";

import styles from "./Drawer.module.scss";

const delay = (ms) => Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    setIsLoading(true);
    const { data } = await axios.post(
      "https://1ecf1771018c1f2a.mokky.dev/orders/",
      { items: cartItems }
    );
    setOrderId(data.id);
    setIsOrderComplete(true);
    setCartItems([]);

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      await axios.delete("https://1ecf1771018c1f2a.mokky.dev/cart/" + item.id);
      await delay(1000);
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-20">
          Cart
          <img
            onClick={onClose}
            className="removeBtn"
            width={20}
            height={20}
            src="react-sneakers/img/cancel.svg"
            alt="cancel"
          ></img>
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="Items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex justify-between align-center mb-20"
                >
                  <img
                    className="mr-20"
                    width={80}
                    height={70}
                    src={obj.imageUrl}
                    alt="sneakers"
                  ></img>
                  <div className="cartItemImg"></div>
                  <div className="mr-30">
                    <p className="m-5">{obj.title}</p>
                    <strong>${obj.price}</strong>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn d-flex justify-between mr-0"
                    width={15}
                    height={15}
                    src="react-sneakers/img/cancel.svg"
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
                  <b>${totalPrice + totalPrice * 0.05}</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>${totalPrice * 0.05}</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Check Out
                <img src="react-sneakers/img/arrow.svg" alt="arrow"></img>
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Order is processed!" : "Cart Empty"}
            description={
              isOrderComplete
                ? `Your order ${orderId} will be transferred to courier delivery soon`
                : "Add at least one pair of sneakers"
            }
            image={
              isOrderComplete
                ? "react-sneakers/img/order.svg"
                : "react-sneakers/img/CartEmpty.svg"
            }
          ></Info>
        )}
      </div>
    </div>
  );
}

export default Drawer;
