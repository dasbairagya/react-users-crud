import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    //get local storage data
    const getLocalData = () => {
      const data = localStorage.getItem('auth');
      if(data){
          return JSON.parse(data).token; //string to array
      }
    }

  return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" exact="true" to="/"> React Users </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" exact="true" to="/about">About</NavLink>
              <NavLink className="nav-link" exact="true" to="/blog">Blog</NavLink>
              <NavLink className="nav-link" exact="true" to="/contact">Contact</NavLink>
              <NavLink className="nav-link" exact="true" to="/todo">List</NavLink>
            {
              getLocalData() ? <>
              <NavLink className="nav-link" exact="true" to="/logout">Logout</NavLink>
              <NavLink className="btn btn-outline-light" exact="true" to="/users/add">Add User</NavLink></> :
              <NavLink className="nav-link" exact="true" to="/login">Login</NavLink>
            }
            
            </div>
          </div>
          
        </div>
    </nav>

  );

};

export default Navbar;