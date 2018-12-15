import React from "react";
import { Link } from "react-router-dom";
import tmdbLogo from "../../tmdb-logo.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <p className="footer-brand-logo">
            <Link to="/">Dopeflix</Link>
          </p>
          <p>Wszystkie filmy i seriale <br /> w jednym, miejscu</p>
        </div>

        <div className="footer-credits">
          <p>
            <a href="http://github.com/folxu/">
              Created by folxu.
            </a>
          </p>
        </div>

        <div>
          <img className="tmdb-logo" src={tmdbLogo} alt="TheMobieDB Logo" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;