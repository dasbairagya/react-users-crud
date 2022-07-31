import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export const AddUser = () => {

    let history = useNavigate();
    const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",  
      phone: "",
      website: "",
      password: ""
    });
  
    const { name, username, email, phone, website, password } = user; //destractor  
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value }); //to keep the state of the form use ...user to have the other fileds values
    };
  
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user); //post user to the server
    history("/"); //redirect to home
  };


  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
             <label for="staticEmail" class="col-sm-2 col-form-label">Full Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="staticEmail" class="col-sm-2 col-form-label">Phone</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="staticEmail" class="col-sm-2 col-form-label">Website</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
          <label for="staticEmail" class="col-sm-2 col-form-label">Password</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block mt-5">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

