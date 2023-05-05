import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites({onAddToFavorite}) {
  const {favorites} = React.useContext(AppContext);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My bookmarks</h1>
      </div>

      <div className="d-flex flex-wrap">
      {favorites.map((item, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item} // конкатинация для передачи остальных свойств их обьекта
            />
          ))}</div>
    </div>
  );
}

export default Favorites;
