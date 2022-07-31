import React from 'react'
import { NavLink } from "react-router-dom";

const Register = () => {
  return (

    <div className="container">

      <div
        id="signupbox"
        style={{ marginTop: 50 }}
        className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
      >
        <div className="card">
          <div className="card-header">
            <div className="panel-title">Register</div>
            <div
              style={{
                float: "right",
                fontSize: "80%",
                position: "relative",
                top: "-10px"
              }}
            >
             
            </div>
            </div>
            <div style={{ paddingTop: 30 }} className="card-body">
            <form id="loginform" className="form-horizontal" role="form">
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
                placeholder="username or email"
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
                <a id="btn-login" href="#" className="btn btn-success">
                  Register
                </a>

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
                  <p> Go to  
                  <span><NavLink className="nav-link" exact to="/login">Login</NavLink></span></p>
                </div>
              </div>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>
      

      )
}
export default Register;
