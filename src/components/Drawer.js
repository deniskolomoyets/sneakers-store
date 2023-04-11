function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Bag <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Men's Sneaker Nike Lebron XVIII Low</p>
              <b>6969$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Subtotal:</span>
              <div></div>
              <b>6666$</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>333$</b>
            </li>
          </ul>
          <button className="greenButton">
            Checkout securely <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
