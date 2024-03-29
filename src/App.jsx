import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard';
import Forgotpassword from './Components/Forgotpassword';
import Resetpassword from './Components/Resetpassword';

const App = () => {

  const baseURL = 'http://localhost:5000/api/users/';

  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signin baseURL = {baseURL} />} />
          <Route path='/login' element={<Login baseURL={baseURL} />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/forgotpassword' element={<Forgotpassword baseURL={baseURL} />} />
          <Route path='/resetpassword/:userId/:token' element={<Resetpassword baseURL={baseURL} />} />
          {/* <Route path='/' element={<Home />} /> */}
        </Routes>
    </BrowserRouter>
    
    </div>
  );
};

export default App;