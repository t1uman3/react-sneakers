import React from "react";
import axios from "axios";
import Card from "./components/Card";
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
    axios
      .get("https://667d9e1e297972455f65d0df.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://667d9e1e297972455f65d0df.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    // axios
    //   .get("https://667d9e1e297972455f65d0df.mockapi.io/favorites")
    //   .then((res) => {
    //     setFavorites(res.data);
    //   });
  }, []);

  // const onAddToFavorite = (obj) => {
  //   axios.post("https://667d9e1e297972455f65d0df.mockapi.io/cart/", obj);
  //   setCartItems((prev) => [...prev, obj]);
  // };

  const onAddToCard = (obj) => {
    axios.post("https://667d9e1e297972455f65d0df.mockapi.io/cart/", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://667d9e1e297972455f65d0df.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id != id));
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
              Items={Items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              setSearchValue={setSearchValue}
              // onAddToFavorite={onAddToFavorite}
              onAddToCard={onAddToCard}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          exact
          element={
            <Favorites
            // items={Favorites}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
