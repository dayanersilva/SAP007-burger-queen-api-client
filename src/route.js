import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login.jsx';
import SignUp from './pages/register/signup.jsx';
import Menu from './pages/menu/menu.jsx';

const AllRoute = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AllRoute;