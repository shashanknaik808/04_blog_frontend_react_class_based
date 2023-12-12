import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import Footer from './components/Footer';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Logout from './components/Logout';
import Signup from './components/Signup';
import AddBlogs from './components/AddBlogs';
// import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetail from './components/BlogDetail';

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
          <Route path='/auth' element={<Login />} />
          <Route path='/auth/logout' element={<Logout />} />
          <Route path='/auth/signup' element={<Signup />} />

          <Route path='/' element={<Home />} />
          <Route path='/blog/add' element={<AddBlogs isLoggedIn={this.state.isLoggedIn} />} />
          <Route path='/myBlogs' element={<UserBlogs />} />
          <Route path='/myBlogs/:id' element={<BlogDetail />} />
        </Routes>
        <Footer />

      </>
    )
  }
}

export default App;