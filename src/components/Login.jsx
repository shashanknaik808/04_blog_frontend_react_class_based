import React, { Component } from 'react';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignup: true,
            inputs: {
                name: "",
                email: "",
                password: ""
            }

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.inputs);
    }

    render() {
        return (
            <div style={{ "backgroundImage": "url('assets/img/home-bg.jpg')" }}>
                {/* Page Header*/}
                <header className="masthead" >
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="page-heading" style={{ textAlign: 'center' }}>
                                    <h1>{this.state.isSignup ? "Sign Up" : "Login"}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Main Content*/}
                <main className="mb-4">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">

                                <div className="my-5">
                                    <form action="/auth" method="POST" onSubmit={this.handleSubmit}>
                                        {this.state.isSignup && <><div className="form-floating">
                                            <input className="form-control" id="name" name="name" type="text" onChange={this.handleChange} value={this.state.name}
                                                placeholder="Type your Name..." />
                                            <label htmlFor="name">Name</label>
                                        </div><br /></>}
                                        <div className="form-floating">
                                            <input className="form-control" id="email" name="email" type="email" onChange={this.handleChange} value={this.state.email}
                                                placeholder="Type your registed email..." required />
                                            <label htmlFor="email">Email</label>
                                        </div><br />
                                        <div className="form-floating">
                                            <input className="form-control" id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}
                                                placeholder="Type the password..." required />
                                            <label htmlFor="password">Password</label>
                                        </div><br />
                                        {/* Submit Button*/}
                                        <div style={{ textAlign: 'center' }}>
                                            <button className="btn text-uppercase" id="submitButton" type="submit" style={{ color: 'orange' }}>Submit</button><br />
                                            <button onClick={() => this.setState({ isSignup: !this.state.isSignup })} className="btn text-uppercase" id="submitButton" type="submit">Change to {this.state.isSignup ? "Login" : "Sign Up"}</button>
                                        </div>

                                        <span style={{ 'color': '#dc3545', 'fontWeight': 'bold', 'fontStyle': 'oblique' }}>
                                            &ensp; &ensp;
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Login;