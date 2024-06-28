import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [Items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://667d9e1e297972455f65d0df.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCard = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer
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
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-30">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search"></img>
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {Items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCard(obj)}
              onFavorite={() => console.log("press favorite")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
