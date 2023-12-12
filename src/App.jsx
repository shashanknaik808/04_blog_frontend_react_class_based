import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Logout from './components/Logout';

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Login />}></Route>
          <Route path='/auth/logout' element={<Logout />}></Route>
          <Route path='/auth/signup' element={<Signup />}></Route>
        </Routes>
        <Footer />

      </>
    )
  }
}

export default App;