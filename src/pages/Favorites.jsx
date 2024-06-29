import Card from "../components/Card";

function Favorites() {
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-30">
        <h1>My Favorites</h1>
      </div>

      <div className="d-flex flex-wrap">
        {/* {Items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onPlus={(obj) => onAddToCard(obj)}
            onFavorite={() => onAddToFavorite(obj)}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Favorites;
