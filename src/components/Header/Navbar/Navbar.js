import React, { Component } from "react";
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    mobileNav: false
  };

  openNavbar = () => {
    this.setState({
      mobileNav: !this.state.mobileNav
    });
  };

  render() {
    let mobileNavbar;

    if (this.state.mobileNav) {
      mobileNavbar = <NavbarMobile />;
    }

    return (
      <div className="nav-container">
        <nav>
          <p className="nav-brand-logo">
            <Link to="/">Dopeflix</Link>
          </p>
          <button className="nav-hamburger" onClick={this.openNavbar}>
            <i className="fas fa-bars" />
          </button>
          {mobileNavbar}
          <ul className="nav-desktop">
            <li>
              <Link to="/series-search/">Wyszukaj serial</Link>
            </li>
            <li>
              <Link to="/movie-search/">Wyszukaj film</Link>
            </li>
            {/* <li>
              <i className="icon fas fa-user" />
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
