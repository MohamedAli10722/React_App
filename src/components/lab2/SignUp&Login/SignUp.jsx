import React, { Component } from "react";
import style from "./style1.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleEmail = (event) => {
    this.setState({ userName: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ Password: event.target.value });
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

        <div className="input" onChange={this.handleEmail}>
          <label>Email:</label>
          <input type="text" />
        </div>
        <div className="input" onChange={this.handleChange}>
          <label>Password:</label>
          <input type="text" />
        </div>
        <div className="input" onChange={this.handleChange}>
          <label>Confirm Password:</label>
          <input type="text" />
        </div>

        <div className="submitContainer" onChange={this.handleSubmit}>
          <div className="submit">Sign Up</div>
          <div className="submit">Login</div>
        </div>
      </div>
    );
  }
}

export default Signup;
