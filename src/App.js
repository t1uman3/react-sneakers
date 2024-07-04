import React from "react";
import axios from "axios";

import Orders from "./pages/Orders";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export const AppContext = React.createContext({});

function App() {
  const [Items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://1ecf1771018c1f2a.mokky.dev/cart"),
            axios.get("https://1ecf1771018c1f2a.mokky.dev/favorites"),
            axios.get("https://1ecf1771018c1f2a.mokky.dev/items"),
          ]);

        setIsLoading(false);
        setFavorites(favoritesResponse.data);
        setCartItems(cartResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert(`Error data loading ;(`);
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://1ecf1771018c1f2a.mokky.dev/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://1ecf1771018c1f2a.mokky.dev/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert(`Failed add to cart ;(`);
      console.log(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://1ecf1771018c1f2a.mokky.dev/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.parentId) !== Number(id))
      );
    } catch (error) {
      alert("Failed to remove item from cart");
      console.log(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://1ecf1771018c1f2a.mokky.dev/favorites/${obj.id}`);
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://1ecf1771018c1f2a.mokky.dev/favorites/",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Failed to add to favorites");
      console.log(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        Items,
        setCartItems,
        onAddToCart,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          onClose={() => {
            setCartOpened(false);
          }}
          opened={cartOpened}
        />

        <Header
          onClickCart={() => {
            setCartOpened(true);
          }}
        />
        <Routes>
          <Route
            path="react-sneakers/"
            exact
            element={
              <Home
                items={Items}
                cartItems={cartItems}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route
            path="react-sneakers/favorites/"
            exact
            element={<Favorites />}
          ></Route>
          <Route
            path="react-sneakers/orders/"
            exact
            element={<Orders />}
          ></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
