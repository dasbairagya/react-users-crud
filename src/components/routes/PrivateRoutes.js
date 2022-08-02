import React from 'react'
import {Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    // let auth = localStorage.getItem("token");
    //<Outlet /> is used for rendering the component inside the <Routes> for private routes
  let auth = {'token': true};
  return (
   auth.token ? <Outlet /> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes
