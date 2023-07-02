import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
// import { GiShoppingCart } from "react-icons/gi";
const Header = () => {
  useEffect(() => {
    // Initialize Bootstrap collapse component
    const toggleNavbar = () => {
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");
      navbarToggler.addEventListener("click", () => {
        navbarCollapse.classList.toggle("show");
      });
    };
    toggleNavbar();
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {/* <GiShoppingCart /> */}
          🛒 Ecomm
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" exact to="/">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/policy">
                Policy
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resister">
                Resister
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart (0)
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
