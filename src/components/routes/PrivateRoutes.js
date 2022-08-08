import React, { useEffect } from 'react'
import {Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {

    let data = localStorage.getItem('auth');
    // console.log('private route');
    // console.log(data);
    let auth  = data ? JSON.parse(data).token: false;
    //<Outlet /> is used for rendering the component inside the <Routes> for private routes
  // let auth = {'token': false};

  return (
   auth? <Outlet /> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes
