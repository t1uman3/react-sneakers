import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [Items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = axios.get("https://1ecf1771018c1f2a.mokky.dev/cart");
      const favoritesResponse = axios.get(
        "https://1ecf1771018c1f2a.mokky.dev/favorites"
      );
      const itemsResponse = axios.get(
        "https://1ecf1771018c1f2a.mokky.dev/items"
      );
      setFavorites(favoritesResponse.data);
      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCard = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://1ecf1771018c1f2a.mokky.dev/cart${obj.id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else axios.post("https://1ecf1771018c1f2a.mokky.dev/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://1ecf1771018c1f2a.mokky.dev/cart${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://1ecf1771018c1f2a.mokky.dev/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post(
          "https://1ecf1771018c1f2a.mokky.dev/favorites/",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Failed to add to favorites");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          onClose={() => {
            setCartOpened(false);
          }}
        />
      ) : null}

      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={Items}
              cartItems={cartItems}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              setSearchValue={setSearchValue}
              onAddToFavorite={onAddToFavorite}
              onAddToCard={onAddToCard}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          exact
          element={<Favorites items={favorites} addFavorite={true} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
