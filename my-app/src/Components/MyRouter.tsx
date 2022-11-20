import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Profile from './Profile'

const MyRouter = () => {
  // Router wrap over everything.
  //'Routes' wrap for all routes.
    //Route wrap for a individual route, path for page path and element for the component to call.
  return ( 
    <BrowserRouter> 
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>

    </BrowserRouter>
   );
}
 
export default MyRouter;