
import React, { Component } from 'react';
class Button extends Component {
  constructor() {
    super();
    this.click = () => {
      this.props.func();
      this.click = () => {}
    }
  }

  render() {
    return (
      <button onClick={this.click}>
        {this.props.text}
      </button>
    );
  }
}


export default Button;
