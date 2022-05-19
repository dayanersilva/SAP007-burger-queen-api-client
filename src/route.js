import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login.jsx';
import SignUp from './pages/register/signup.jsx';
import Menu from './pages/menu/menu.jsx';
import Kitchen from './pages/kitchen/kitchen.jsx';

const AllRoute = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/kitchen' element={<Kitchen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AllRoute;