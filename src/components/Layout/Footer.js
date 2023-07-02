import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="footer bg-dark text-light p-3"
      style={{ minHeight: "10vh" }}
    >
      <ul className="nav justify-content-center my-0">
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/policy">
            Policy
          </Link>
        </li>
      </ul>
      <h4 className="text-center">All Rights Reserved © Vtech ventures </h4>
      <p className="text-center">Made with ❤️ by team</p>
    </div>
  );
};

export default Footer;
