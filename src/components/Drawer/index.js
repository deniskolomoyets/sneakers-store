import React from 'react';
import axios from 'axios';

import { Info } from '../Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onRemove, onClose, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://64382ecff3a0c40814acdc08.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://64382ecff3a0c40814acdc08.mockapi.io/cart' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('failed to create order');
    }
    setIsLoading(false);
  };
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Bag <img onClick={onClose} className="cu-p" src="sneakers-store/img/btn-remove.svg" alt="Close" />{' '}
          {/* close cart on click - props */}
        </h2>
        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage:  `url(/sneakers-store/${obj.imageUrl})` }}
                    className="cartItemImg"></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}$</b>
                  </div>
                  
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="sneakers-store/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Subtotal:</span>
                  <div></div>
                  <b>{totalPrice} $</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{Math.round((totalPrice / 100) * 5)} $</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                Checkout securely <img src="sneakers-store/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Order is processed' : 'Cart empty'}
            description={
              isOrderComplete
                ? `Your order #${orderId} will be delivered to courier soon`
                : 'Add at least one pair of sneakers to order.'
            }
            image={isOrderComplete ? "sneakers-store/img/complete-order.jpg" : "sneakers-store/img/empty-cart.jpg"}
          />
        )}
      </div>
    </div>
  );
}
export default Drawer;
