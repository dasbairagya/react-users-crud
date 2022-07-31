import React , { useState } from 'react';
import axios from 'axios'
import { NavLink, useNavigate } from "react-router-dom";


const Login = () => {

  let history = useNavigate();
  const [authUser, setUser] = useState({
    username: "",
    password: ""
  });
  const {username, password } = authUser; //destractor  
  const onInputChange = e => {
    setUser({ ...authUser, [e.target.name]: e.target.value }); //to keep the state of the form use ...user to have the other fileds values
  console.log(authUser);
  };

  const onSubmit = async e => {
    e.preventDefault();
    
    if(authUser.username.length < 1 || authUser.password.length < 1){
      alert("Please fill all the fields");
    }else{
  
      const allUser = await axios.get('http://localhost:3003/users', authUser);
      const loginUser = allUser.data.find(user => user.username === authUser.username && user.password === authUser.password);

      if(loginUser){
        console.log('logged in');
        history("/");
      }else{
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
              top: "-10px"
            }}
          >
            <a href="/register">Forgot password?</a>
          </div>
        </div>
        <div style={{ paddingTop: 30 }} className="card-body">
          <div
            style={{ display: "none" }}
            id="login-alert"
            className="alert alert-danger col-sm-12"
          />
          <form id="loginform" className="form-horizontal" onSubmit={e => onSubmit(e)}>
            <div style={{ marginBottom: 25 }} className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-user" />
              </span>
              <input
                id="login-username"
                type="text"
                className="form-control"
                name="username"
                defaultValue=""
                placeholder="email"
                value={username}
                onChange={e => onInputChange(e)}
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
                onChange={e => onInputChange(e)}
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
              {/* Button */}
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
                    fontSize: "85%"
                  }}
                >
                  Don't have an account! <span><NavLink className="nav-link" exact to="/register">Sign Up Here</NavLink></span>
                  
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
              top: "-10px"
            }}
          >
            <button>
              Sign In
            </button>
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
                <button id="btn-signup" type="button" className="btn btn-info">
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
                  <i className="icon-facebook" /> &nbsp; Sign Up with Facebook
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