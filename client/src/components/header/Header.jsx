import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header_container">
        <img
          className="header_logo"
          alt="header logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        ></img>
        
          <nav className="header_nav">
            <ul className="header_ul">
              <li className="header_li">
                <Link to="/" className="header_link">
                  Главная
                </Link>
              </li>
              <li className="header_li">
                <Link to="/bd" className="header_link">
                  БД
                </Link>
              </li>
              <li className="header_li">
                <Link
                  to="/account"
                  className="header_link header_link_find"
                ></Link>
              </li>
            </ul>
          </nav>
      </div>
    </header>
  );
};

export default Header;
