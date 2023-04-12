import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { title: 'Mens Sneaker Nike Lebron XVIII Low', price: 6969, imageUrl: '/img/sneakers/1.jpg' },
  { title: 'Mens Sneaker Air Jordan 11', price: 1313, imageUrl: '/img/sneakers/2.jpg' },
  { title: 'Mens Sneaker Nike Kyrie Flytrap IV', price: 4553, imageUrl: '/img/sneakers/5.jpg' },
  { title: 'Mens Sneaker Puma X Aka Boku Future Rider', price: 2702, imageUrl: '/img/sneakers/7.jpg' },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search" />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
