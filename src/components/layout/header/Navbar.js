import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="/"> React Users </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink> */}
              <NavLink className="nav-link" exact to="/about">About</NavLink>
              <NavLink className="nav-link" exact to="/blog">Blog</NavLink>
              <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
              <NavLink className="nav-link" exact to="/todo">List</NavLink>
              <NavLink className="nav-link" exact to="/login">Login</NavLink>
              <NavLink className="nav-link" exact to="/register">Register</NavLink>
            </div>
          </div>
          <NavLink className="btn btn-outline-light" to="/users/add">Add User</NavLink>
        </div>
    </nav>

  );

};

export default Navbar;