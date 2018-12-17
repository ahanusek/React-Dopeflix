import React from "react";
import { Link } from "react-router-dom";
import tmdbLogo from "../../tmdb-logo.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <p className="footer-brandlogo">
          <Link to="/">Dopeflix</Link>
        </p>
        <p>
          Wszystkie filmy i seriale <br /> w jednym miejscu!
        </p>
      </div>
      <div>
        <img className="tmdb-logo" src={tmdbLogo} alt="TheMobieDB Logo" />
      </div>
    </footer>
  )
}

export default Footer;