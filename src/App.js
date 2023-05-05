import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';

import { Route } from 'react-router-dom';

function App() {
  const [items, setItems] = React.useState([]); //connect the list from the backend
  const [cartItems, setCartItems] = React.useState([]); // state for cart items
  const [searchValue, setSearchValue] = React.useState(''); //search by product name
  const [cartOpened, setCartOpened] = React.useState(false); //cart opened or not
  const [favorites, setFavorites] = React.useState([]); // state for favorite items
  const [isLoading, setIsLoading] = React.useState(true); //loading

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://64382ecff3a0c40814acdc08.mockapi.io/cart');
      const itemsResponse = await axios.get('https://64382ecff3a0c40814acdc08.mockapi.io/items'); //for list
      // const favoritesResponse = await axios.get(
      //   'https://64382ecff3a0c40814acdc08.mockapi.io/favorites',
      // );
      setIsLoading(false);
      setCartItems(cartResponse.data);
      // setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://64382ecff3a0c40814acdc08.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id))); //filter cart if I click and two same items added to cart
    } else {
      axios.post('https://64382ecff3a0c40814acdc08.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    }
  }; //rendering obj (push the selected element into the array cart and send it to mockapi) (To prevent the array from mutating we use spread)

  const onRemoveItem = (id) => {
    axios.delete(`https://64382ecff3a0c40814acdc08.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }; //remove item from server and cart

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://64382ecff3a0c40814acdc08.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(
          'https://64382ecff3a0c40814acdc08.mockapi.io/favorites',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to the favorites');
    }
  };

  const onChangeSearchInput = (event) => {
    setFavorites(event.target.value);
  }; //when changes input

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems }}>
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
        )}
        {/* сlosing the cart on click */}
        <Header onClickCart={() => setCartOpened(true)} /> {/* opening the cart on click */}
        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/favorites" exact>
          <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />{' '}
          {/* take items from favorites(mockapi) */}
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
