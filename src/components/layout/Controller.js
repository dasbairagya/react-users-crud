import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import { AddUser } from '../users/AddUser';
import { EditUser } from '../users/EditUser';
import  Users  from '../users/Users';
import Nopage from '../pages/Nopage';

const Controller = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path='/blog' element={<Blog />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path="/users/add" element={<AddUser />} />
      <Route exact path="/users/edit/:id" element={<EditUser />} />
      <Route exact path="/users/:id" element={<Users />} />
      <Route exact path='*' element={<Nopage />} /> 
    </Routes>
  );
}

export default Controller;