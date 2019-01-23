
import React, { Component } from 'react';
class Button extends Component {
  constructor() {
    super();
    this.click = () => {
      if(localStorage.getItem('button_run') == '1' && this.props.isDialog) {
        this.props.func();
        localStorage.button_run = '0';
      }
      else if (localStorage.getItem('button_run') == '0' && this.props.isDialog) {
      } else if (!this.props.isDialog) {
        this.props.func();
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
