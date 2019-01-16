import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';
const terminal = document.querySelector('.terminal');



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
          console.log('short');
        } else{
          console.log('long');
        }
        console.log('Everything is fine');
      } catch(err){
        console.log(err);
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
