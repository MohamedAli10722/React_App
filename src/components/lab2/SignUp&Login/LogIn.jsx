import React, { Component } from 'react';
import style from "./style2.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('User logged in with data:', this.state);
  };

  render() {
    const { email, password } = this.state;

    return (
        <div className="container">
        <div className="header">
          <div className="text">Login</div>
        </div>

        <div className="input" onChange={this.handleChange}>
          <label>Email:</label>
          <input type="text" />
        </div>

        <div className="input" onChange={this.handleChange}>
          <label>Password:</label>
          <input type="text" />
        </div>

        <div className="submitContainer" onChange={this.handleSubmit}>
          <div className="submit">Login</div>
        </div>
      </div>
    );
  }
}

export default Login;