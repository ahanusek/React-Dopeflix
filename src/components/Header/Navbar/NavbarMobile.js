import React from "react";
import { Link } from "react-router-dom";

const NavbarMobile = props => {
  return (
    <ul>
      <li>
        <Link to="/series-search/" onClick={props.hideMenu}>
          Wyszukaj serial
        </Link>
      </li>
      <li>
        <Link to="/movie-search/" onClick={props.hideMenu}>
          Wyszukaj film
        </Link>
      </li>
      {/* <li>
        <i className="icon fas fa-user" />
      </li> */}
    </ul>
  );
};

export default NavbarMobile;
