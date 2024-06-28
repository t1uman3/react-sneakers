function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-20">
      <div className="d-flex align-center ">
        <img width={60} height={60} src="/img/shoes.png" alt="logo" />
        <div>
          <h3 className="text-uppercase ">React sneakers</h3>
          <p className="opacity-5">Best sneakers store</p>
        </div>
      </div>
      <ul className="headerRight d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="/Group.svg" alt="cart"></img>
          <span>$1205</span>
        </li>
        <li onClick={props} className="mr-20 cu-p">
          <img src="/heart.svg" alt="favorite"></img>
          <span>Favorite Sneakers</span>
        </li>
        <li>
          <img src="/img/profile.svg" alt="profile"></img>
        </li>
      </ul>
    </header>
  );
}

export default Header;
