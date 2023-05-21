import React from 'react';
import Card from '../components/Card';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    ); //если загрузка идет, передать 10 андефайндов, если загрузка не идет то берем из айтемсов что надо и фильтруем.фильтр по поиску)
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)} //accepts the object from cart(from onPlus) and transmits it to onAddToCart
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Search: "${searchValue}"` : 'All sneakers'}</h1>
        <div className="search-block d-flex">
          <img src="sneakers-store/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="sneakers-store/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          {/*display only when there is something in value(searchValue)*/}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search" />
          {/*value - makes a controlled input. что находится в сеарчвелью передаеться в велью */}
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
