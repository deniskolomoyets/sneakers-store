import styles from './Card.module.scss';
import React from 'react';

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price }); //transmit data(for cart) when the button is pressed
    setIsAdded(!isAdded); //change button (plus or green added)
  };
  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/favorite.svg' : '/img/unfavorite.svg'} alt="favorite" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Shoes"></img>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} $</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} //green added button
          alt="Plus"></img>
      </div>
    </div>
  );
}

export default Card;
