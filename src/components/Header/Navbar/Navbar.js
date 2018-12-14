import React from 'react';
import { Link } from "react-router-dom";
import Search from "../../../containers/Search/Search";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="nav-wrapper">
          <p className="nav-brand-logo">
            <Link to="/">Dopeflix</Link>
          </p>
          <Search />
          <ul>
            <li>
              <i className="icon far fa-user-circle" title="Profil"></i>
            </li>
            {/* <li><i class="icon fas fa-sign-in-alt" title="Zaloguj/Zarejestruj"></i></li> */}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;