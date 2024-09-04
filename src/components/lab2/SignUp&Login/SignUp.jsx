import React, { Component } from "react";
import style from "./style1.css";
import Login from "./LogIn";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ Password: event.target.value });
  };

  handleconfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("User signed up with data:", this.state);
    this.props.onSignup();
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
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
            type="Password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
        </div>

        <div className="input">
          <label>Confirm Password:</label>
          <input
            type="Password"
            value={this.state.confirmPassword}
            onChange={this.handleconfirmPassword}
          />
        </div>

        <div className="submitContainer">
          <div className="submit" onChange={this.handleSubmit}>
            Sign Up
          </div>

          <div className="submit" onClick={<Login />}>
            Login
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
