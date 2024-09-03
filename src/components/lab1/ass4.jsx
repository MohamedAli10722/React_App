import React, { Children, Component } from "react";

class ClassComponent2 extends Component {
  render() {
    const { cor1, cor2, cor3, cor4, Children } = this.props;

    return (
      <div>
        <h1> courses </h1>
        <h2> {cor1} </h2>
        <h2> {cor2} </h2>
        <h2> {cor3} </h2>
        <h2> {cor4} </h2>
        <div>{Children}</div>
      </div>

      // <div>
      //     <h1> I Studied courses {this.props.cor1 ? this.props.cor1 : "" } {this.props.cor2 ? this.props.cor2 : "" }
      //     {this.props.cor3 ? this.props.cor3 : "" } {this.props.cor4 ? this.props.cor4 : "" } </h1>
      // </div>
    );
  }
}

export default ClassComponent2;
