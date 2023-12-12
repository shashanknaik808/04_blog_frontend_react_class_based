import axios from 'axios';
import React, { Component } from 'react'
import Blog from './Blog';
// import { Link } from 'react-router-dom'

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
        }
        this.sendRequest = this.sendRequest.bind(this);
    }

    async sendRequest() {
        const res = await axios.get(`http://localhost:5000/api/blog`)
            .catch(err => console.log(err))

        const data = await res.data;
        //console.log(data);
        return data;
    }
    async componentDidMount() {
        this.sendRequest().then(data => this.setState(data));
        //console.log(data.blogs);
        //this.setState({ blogs: data.blogs });
    }

    render() {
        console.log(this.state);
        return (
            <>
                <header className="masthead" style={{ "backgroundImage": "url('assets/img/about-bg.jpg')" }}>
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="page-heading">
                                    <h1>Blog App</h1>
                                    <span className="subheading">Display Blogs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {
                    (this.state.blogs.length !== 0) && this.state.blogs.map((blog, index) =>
                        <Blog
                            id={blog._id}
                            isUser={localStorage.getItem("userID") === blog.user._id}
                            user={blog.user.name}
                            title={blog.title}
                            description={blog.description}
                            imageURL={blog.image}
                        />)

                }
            </>
        )
    }
}

export default Home;