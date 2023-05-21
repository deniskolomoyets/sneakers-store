import React from 'react';

import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="sneakers-store/img/logo.png" alt="logo"></img>
          <div>
            <h3 className="text-uppercase">React Sheakers</h3>
            <p className="opacity-5">The Best Sneaker Store</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="sneakers-store/img/cart.svg" alt="cart"></img>
          <span>{totalPrice} $</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="sneakers-store/img/heart.svg" alt="bookmarks"></img>
          </Link>
        </li>

        <li>
          <Link to="/orders">
            <img width={18} height={18} src="sneakers-store/img/user.svg" alt="user"></img>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
