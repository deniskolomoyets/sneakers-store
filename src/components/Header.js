import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo"></img>
          <div>
            <h3 className="text-uppercase">React Sheakers</h3>
            <p className="opacity-5">The Best Sneaker Store</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          {' '}
          {/* opening the cart on click - props */}
          <img width={18} height={18} src="/img/cart.svg" alt="cart"></img>
          <span>1200 usd</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="bookmarks"></img>
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="user"></img>
        </li>
      </ul>
    </header>
  );
}

export default Header;
