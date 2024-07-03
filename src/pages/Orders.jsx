import React from "react";
import Card from "../components/Card";
import axios from "axios";
import { AppContext } from "../App";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const { onAddToCart, onAddToFavorite } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://1ecf1771018c1f2a.mokky.dev/orders/"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Error while GET orders");
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-30">
        <h1>My Orders</h1>
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
