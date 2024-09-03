import React from "react";

class ToggleButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggled: false
      };
    }
  
    handleToggle = () => {
      this.setState({ isToggled: !this.state.isToggled });
    };
  
    render()   
   {
      const { isToggled } = this.state;
      return (
        <button onClick={this.handleToggle}>
          {isToggled ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  export default ToggleButton;