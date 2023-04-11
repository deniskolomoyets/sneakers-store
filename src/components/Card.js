function Card() {
  return (
    <div className="card">
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Shoes"></img>
      <h5>Men's Sneaker Nike Lebron XVIII Low</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>6969$</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;
