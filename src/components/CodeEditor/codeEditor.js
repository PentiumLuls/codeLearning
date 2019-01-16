import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';
import { Terminal } from 'xterm';
import { edit } from 'brace';
const terminal = document.querySelector('.terminal-text');



class CodeEditor extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(newValue, e) {
    console.log(newValue, e);

    const editor = this.ace.editor; // The editor object is from Ace's API
    console.log(editor.getValue()); // Outputs the value of the editor
    
    //write in console

    try {
      eval(editor.getValue());
    } catch(err) {
    }

  }
  render() {
    return (
      <ReactAce
        mode="javascript"
        theme="dracula"
        onChange={this.onChange}
        style={{ height: '100%', fontSize: '20px', position: 'relative'} }
        ref={instance => { this.ace = instance; }} // Let's put things into scope
      />
    );
  }
}





export default CodeEditor;
