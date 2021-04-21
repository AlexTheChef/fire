import React, { Component } from "react";
import fire from "./config/fire";

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: "",
            error: ''
        }
    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            this.setState({error: err.message})
        })
    }
    
    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            this.setState({error: err.message})
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="loginbox">
                <div className="loginpoz">
                    <h3>Please Log in or Register</h3>
                    <div className='error'>{this.state.error}</div>
                    <div>
                        <form className="flex">
                            <div>
                                <h5>Enter Email:</h5>
                                <input
                                    className='input'
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                            </div>
                            <br></br>
                            <div>
                                <h5>Enter Password:</h5>
                                <input
                                    className='input'
                                    name="password"
                                    type="password"
                                    onChange={this.handleChange}
                                    id="password"
                                    placeholder="password"
                                    value={this.state.password}
                                />
                            </div>
                            <br></br>
                            <button className="btn btn-dark" onClick={this.login}>Login</button>
                            <br></br>
                            <button className="btn btn-dark" onClick={this.signup}>Signup</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;