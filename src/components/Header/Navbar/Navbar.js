import React from 'react';
import Search from "../../../containers/Search/Search";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="nav-wrapper">
          <p className="nav-brand-logo">Dopeflix</p>
          <Search />
          <i className="hamburger fas fa-bars"></i>
        </div>

        <ul className="nav-bar">
          <li>Aktorzy</li>
          <li>Filmy</li>
          <li>Seriale</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;