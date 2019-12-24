import React from "react";

import "./Header.css";
import { Navbar } from "react-bootstrap";
import { FiBookOpen } from "react-icons/fi";
const Header = () => (
  <div className="header">
    <div className="nav">
      <div className="container">
        <div href="#home" className="logo">
          <h4 className="nav-title">
            <FiBookOpen size={30} className="Car-icon" />
            SARAIVA
          </h4>
        </div>

        <a href="https://github.com/Ricardovasconcelos" className="gitName">
          Github.com/Ricardovasconcelos
        </a>
      </div>
    </div>
  </div>
);

export default Header;
