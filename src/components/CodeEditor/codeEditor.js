import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';
const terminal = document.querySelector('.terminal'),
      debug = document.getElementById('debug'),
      aceEditor = document.querySelector('.ace_editor');



class CodeEditor extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(newValue, e) {
    console.log(newValue, e);

    const editor = this.ace.editor; // The editor object is from Ace's API
    console.log(editor.getValue()); // Outputs the value of the editor


      try {
        terminal.textContent = eval(editor.getValue());
        if (editor.getValue().length < 10){
          terminal.textContent = 'short';
        } else{
          terminal.textContent = 'long';
        }
        terminal.textContent =  terminal.textContent + ' and everything is fine';
      } catch{
        terminal.textContent = 'error';
      }


  }
  render() {
    return (
      <ReactAce
        mode="javascript"
        theme="dracula"
        onChange={this.onChange}
        style={{ height: '100%', fontSize: '20px', position: 'static'} }
        ref={instance => { this.ace = instance; }} // Let's put things into scope
      />
    );
  }
}





export default CodeEditor;
