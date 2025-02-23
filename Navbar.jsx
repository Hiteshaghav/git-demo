import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">TadkaTales</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                  <li><NavLink to="/maharashtrian" className="dropdown-item">Maharashtrian</NavLink></li>
                  <li><NavLink to="/south-indian" className="dropdown-item">South Indian</NavLink></li>
                  {/* <li><NavLink to="/quick-bites" className="dropdown-item">Quick Bites</NavLink></li> */}
                  <li><NavLink to="/healthy-recipes" className="dropdown-item">Healthy Recipes</NavLink></li>
                  <li><NavLink to="/festive-specials" className="dropdown-item">Festive Specials</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/upload" className="nav-link" activeClassName="active">Upload Recipe</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/saved" className="nav-link" activeClassName="active">Saved Recipe</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/favorites" className="nav-link" activeClassName="active">Favorites</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="userActionsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  User Actions
                </a>
                <ul className="dropdown-menu" aria-labelledby="userActionsDropdown">
                  {/* <li><NavLink to="/profile" className="dropdown-item">Profile</NavLink></li> */}
                  <li><NavLink to="/logout" className="dropdown-item">Logout</NavLink></li>
                </ul>
              </li>
            </ul>
            <a className="link-light bg-success p-2" href="/login">Login</a> /
            <a className="link-light bg-info p-2" href="/register"> Register</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;