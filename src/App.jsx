import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import Footer from './components/Footer';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Logout from './components/Logout';
import Signup from './components/Signup';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  render() {
    return (
      <>
        <Navbar isLoggedIn={this.state.isLoggedIn} />
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