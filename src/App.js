import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Nike Blazer Mid Suede",
    price: 499,
    imageUrl: "/img/sneakers/1.jpg",
  },
  { title: "Nike Air Max 270", price: 660, imageUrl: "/img/sneakers/2.jpg" },
  {
    title: "Nike Blazer Mid Suede",
    price: 499,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Puma X Aka Boku Future Rider",
    price: 310,
    imageUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-30">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <svg
              width="35"
              height="35"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                stroke="#E4E4E4"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <input placeholder="Search..."></input>
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
