import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import AppContext from '../context';

function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); //loading

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://64382ecff3a0c40814acdc08.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('error when requesting orders');
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My order</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
