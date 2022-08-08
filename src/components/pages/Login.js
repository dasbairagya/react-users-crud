import React , {useEffect, useState } from 'react';
// import bcrypt from 'bcryptjs';
// import axios from 'axios'
import { NavLink, useNavigate } from "react-router-dom";
import api from '../../api/axios';

const LOGIN_URL = '/users';

// SALT should be created ONE TIME upon sign up
// const salt = bcrypt.genSaltSync(10)
// example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash

const Login = () => {

  let history = useNavigate();

  //get local storage data
  const getLocalData = () => {
    const data = localStorage.getItem('auth');
    if(data){
        return JSON.parse(data); //string to array
    }else{
        return [];
    }
  }


  const [auth, setAuth] = useState(getLocalData());
  const [authUser, setauthUser] = useState({
    username: "",
    password: ""
  });
  const {username, password } = authUser; //destractor  
  
  const onInputChange = e => {
    setauthUser({ ...authUser, [e.target.name]: e.target.value }); //to keep the state of the form use ...user to have the other fileds values
  };


  const saveToken = () => {
    localStorage.setItem('auth', JSON.stringify(auth)); //array to string
  }

  //save to the local storage wherever te items are changed
  useEffect(()=>{
    console.log('from login');
    saveToken();
    // console.log(isCheckedItem);
  },[auth]) //useEffect fires on auth change here


  const handleLogin = async e => {
    e.preventDefault();
    if(authUser.username.length < 1 || authUser.password.length < 1){
      alert("Please fill all the fields");
    }else{
  
      const allUser = await api.get(LOGIN_URL); //get all users from the server i.e. http://localhost:3003/users
      const loginUser = allUser.data.find(user => user.username === authUser.username && user.password === authUser.password);
      
      // const hashedPassword = bcrypt.hashSync(loginUser.password, '$2a$11$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up
      // console.log(hashedPassword);
      
      if (loginUser) {
        console.log('logged in');
        localStorage.setItem('user', JSON.stringify(loginUser));
        const newAuth = {
          token: true
      };

      setAuth(newAuth);
      window.location.href = "/";
      // history("/");
      } else {
        alert("Invalid username or password");
      }
    }

  };

  return (
    <div className="container">
    <div
      id="loginbox"
      style={{ marginTop: 50 }}
      className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
    >
      <div className="card">
        <div className="card-header">
          <div className="panel-title">Sign In</div>
          <div
            style={{
              float: "right",
              fontSize: "80%",
              position: "relative",
              top: "-10px",
            }}
          >
            {/* <a href="/register">Forgot password?</a> */}
          </div>
        </div>
        <div style={{ paddingTop: 30 }} className="card-body">
          <div
            style={{ display: "none" }}
            id="login-alert"
            className="alert alert-danger col-sm-12"
          />
          <form
            id="loginform"
            className="form-horizontal"
            onSubmit={(e) => handleLogin(e)}
          >
            <div style={{ marginBottom: 25 }} className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-user" />
              </span>
              <input
                id="login-username"
                type="text"
                className="form-control"
                name="username"
                placeholder="email"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div style={{ marginBottom: 25 }} className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-lock" />
              </span>
              <input
                id="login-password"
                type="password"
                className="form-control"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="input-group">
              <div className="checkbox">
                <label>
                  <input
                    id="login-remember"
                    type="checkbox"
                    name="remember"
                    defaultValue={1}
                  />{" "}
                  Remember me
                </label>
              </div>
            </div>
            <div style={{ marginTop: 10 }} className="form-group">
              <div className="col-sm-12 controls">
                <button id="btn-login" className="btn btn-success">
                  Login
                </button>
              </div>
            </div>
            <div className="form-group" style={{ marginTop: 10 }}>
              <div className="col-md-12 control">
                <div
                  style={{
                    borderTop: "1px solid#888",
                    paddingTop: 15,
                    fontSize: "85%",
                  }}
                >
                  Don't have an account!{" "}
                  <span>
                    <NavLink className="nav-link" exact="true" to="/register">
                      Sign Up Here
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div
      id="signupbox"
      style={{ display: "none", marginTop: 50 }}
      className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
    >
      <div className="panel panel-info">
        <div className="panel-heading">
          <div className="panel-title">Sign Up</div>
          <div
            style={{
              float: "right",
              fontSize: "85%",
              position: "relative",
              top: "-10px",
            }}
          >
            <button>Sign In</button>
          </div>
        </div>
        <div className="panel-body">
          <form id="signupform" className="form-horizontal">
            <div
              id="signupalert"
              style={{ display: "none" }}
              className="alert alert-danger"
            >
              <p>Error:</p>
              <span />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="col-md-3 control-label">
                Email
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="firstname" className="col-md-3 control-label">
                First Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="lastname" className="col-md-3 control-label">
                Last Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-md-3 control-label">
                Password
              </label>
              <div className="col-md-9">
                <input
                  type="password"
                  className="form-control"
                  name="passwd"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="icode" className="col-md-3 control-label">
                Invitation Code
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  name="icode"
                  placeholder=""
                />
              </div>
            </div>
            <div className="form-group">
              {/* Button */}
              <div className="col-md-offset-3 col-md-9">
                <button
                  id="btn-signup"
                  type="button"
                  className="btn btn-info"
                >
                  <i className="icon-hand-right" /> &nbsp; Sign Up
                </button>
                <span style={{ marginLeft: 8 }}>or</span>
              </div>
            </div>
            <div
              style={{ borderTop: "1px solid #999", paddingTop: 20 }}
              className="form-group"
            >
              <div className="col-md-offset-3 col-md-9">
                <button
                  id="btn-fbsignup"
                  type="button"
                  className="btn btn-primary"
                >
                  <i className="icon-facebook" /> &nbsp; Sign Up with
                  Facebook
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Login;
// https://www.youtube.com/watch?v=fMTSQ6K_Oh0