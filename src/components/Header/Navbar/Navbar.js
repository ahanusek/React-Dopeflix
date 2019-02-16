import React, { Component } from "react";
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    mobileNav: false
  };

  openMenu = () => {
    this.setState({
      mobileNav: !this.state.mobileNav
    });
  };

  hideMenu = () => {
    this.setState({ mobileNav: null });
  };

  render() {
    let mobileNavbar;

    if (this.state.mobileNav) {
      mobileNavbar = <NavbarMobile hideMenu={this.hideMenu} />;
    }

    return (
      <div className="nav-container">
        <nav>
          <p className="nav-brand-logo">
            <Link to="/" onClick={this.hideMenu}>
              Dopeflix
            </Link>
          </p>
          <button className="nav-hamburger" onClick={this.openMenu}>
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
