import React, { Component } from "react";
import style from "./style2.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ Password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("User logged in with data:", this.state);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
        </div>

        <div className="input">
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmail}
          />
        </div>

        <div className="input">
          <label>Password:</label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePassword}
          />
        </div>

        <div className="submitContainer">
          <div className="submit" onChange={this.handleSubmit}>
            Login
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
