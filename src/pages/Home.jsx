import Card from "../components/Card";

function Home({
  Items,
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  //   onAddToFavorite,
  onAddToCard,
}) {
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-30">
        <h1>
          {searchValue ? `Search by request:${searchValue}` : "All sneakers"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search"></img>
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              width={12}
              height={12}
              src="/cancel.svg"
              alt="clear"
            ></img>
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          ></input>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {Items.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        ).map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onPlus={(obj) => onAddToCard(obj)}
            onFavorite={() => console.log("press favorite")}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
