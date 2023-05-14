import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';
import Orders from './pages/Orders';

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
      try {
        const [cartResponse, itemsResponse, favoritesResponse] = await Promise.all([
          axios.get('https://64382ecff3a0c40814acdc08.mockapi.io/cart'),
          axios.get('https://64382ecff3a0c40814acdc08.mockapi.io/items'),
          axios.get('https://64382ecff3a0c40814acdc08.mockapi.io/favorites'),
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('error when requesting data');
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id))); //filter cart if I click and two same items added to cart
        await axios.delete(`https://64382ecff3a0c40814acdc08.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://64382ecff3a0c40814acdc08.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('error when adding to cart');
      console.error(error);
    }
  }; //rendering obj (push the selected element into the array cart and send it to mockapi) (To prevent the array from mutating we use spread)

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://64382ecff3a0c40814acdc08.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('error when deleting from cart');
      console.error(error);
    }
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
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }; //when changes input

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id)); //в масиве корзине вытаскивать перентайди и сверять его с айди из карточки
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />
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
          <Favorites />{' '}
          {/* take items from favorites(mockapi) */}
        </Route>
        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
