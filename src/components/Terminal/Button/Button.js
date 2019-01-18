
import React, { Component } from 'react';
class Button extends Component {
  constructor() {
    super();
    this.click = () => {
      if(localStorage.getItem('button_run') == 0) {
        this.props.func();
        localStorage.button_run = 1;
      }
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
