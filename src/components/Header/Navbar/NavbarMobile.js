import React from "react";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <ul>
      <li>
        <Link to="/series-search/">Wyszukaj serial</Link>
      </li>
      <li>
        <Link to="/movie-search/">Wyszukaj film</Link>
      </li>
      <li>
        <i className="icon fas fa-user" />
      </li>
    </ul>
  );
};

export default NavbarMobile;
