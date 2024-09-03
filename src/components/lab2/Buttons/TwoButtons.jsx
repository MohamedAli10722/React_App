import React, { Component } from "react";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 1 ? prevState.count - 1 : prevState.count,
    }));
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={this.handleDecrement}
          style={{ backgroundColor: "yellow", height: "50px", width: "50px" }}
        >
          -
        </button>
        <span style={{ margin: "0 20px" }}>{this.state.count}</span>
        <button
          onClick={this.handleIncrement}
          style={{ backgroundColor: "yellow", height: "50px", width: "50px" }}
        >
          +
        </button>
      </div>
    );
  }
}

export default CounterComponent;
