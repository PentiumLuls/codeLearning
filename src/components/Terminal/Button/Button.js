
import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state={
      code:''
    }
  }

  onChange(newValue, e) {
    
  }
  render() {
    return (
      <button onClick={this.props.func}>
        {this.props.text}
      </button>
    );
  }
}





export default Button;
