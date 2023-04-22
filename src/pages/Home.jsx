import Card from '../components/Card';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Search: "${searchValue}"` : 'All sneakers'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}{' '}
          {/*display only when there is something in value(searchValue)*/}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search" />
          {/*value - makes a controlled input. что находится в сеарчвелью передаеться в велью */}
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())) //фильтр по поиску
          .map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)} //accepts the object from cart(from onPlus) and transmits it to onAddToCart
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
