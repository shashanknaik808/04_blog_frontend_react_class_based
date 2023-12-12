import React, { Component } from 'react';
// import Blog from './Blog'
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Blogs extends Component {
    render() {
        return (
            <>
                <header className="masthead" style={{ "backgroundImage": "url('assets/img/about-bg.jpg')" }}>
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="page-heading">
                                    <h1>Blogs</h1>
                                    <span className="subheading">Display Blogs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7"

                        >

                            <div className="d-flex justify-content-end mb-4"><Link className="btn btn-primary text-uppercase"
                                to="/">Older Posts →</Link></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Blogs;