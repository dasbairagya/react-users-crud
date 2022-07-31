import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Todo from '../pages/Todo';
import { AddUser } from '../users/AddUser';
import { EditUser } from '../users/EditUser';
import  Users  from '../users/Users';
import Nopage from '../pages/Nopage';
import Login from '../pages/Login';
import Register from '../pages/Register';

const RouteController = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path='/blog' element={<Blog />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/todo' element={<Todo />} />
      <Route exact path="/users/add" element={<AddUser />} />
      <Route exact path="/users/edit/:id" element={<EditUser />} />
      <Route exact path="/users/:id" element={<Users />} />
      <Route exact path='*' element={<Nopage />} /> 
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default RouteController;