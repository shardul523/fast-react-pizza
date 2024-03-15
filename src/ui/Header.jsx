import { Link } from "react-router-dom";

import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link className="tracking-widest" to={"/"}>
        Fast React Pizza
      </Link>
      <SearchOrder />
      <p>Shardul</p>
    </header>
  );
}

export default Header;
