import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-20">
      <Link to="react-sneakers/">
        <div className="d-flex align-center ">
          <img width={60} height={60} src="img/shoes.png" alt="logo" />
          <div>
            <h3 className="text-uppercase ">React sneakers</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="img/cart.svg" alt="cart"></img>
          <span>${totalPrice}</span>
        </li>
        <Link to="/favorites">
          <li onClick={props.onClickFavorite} className="mr-20 cu-p">
            <img src="img/favorite.svg" alt="favorite"></img>
          </li>
        </Link>
        <Link to="/orders">
          <li>
            <img className="cu-p" src="img/profile.svg" alt="profile"></img>
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
