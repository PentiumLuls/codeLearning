
import React, { Component } from 'react';
import { Terminal } from 'xterm';




class CodeEditor extends Component {

    componentDidMount() {
        let term = new Terminal();
        term.open(document.querySelector('.terminal-text'));
        term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
        document.querySelector('.xterm-helpers').style.display = 'none';
        document.querySelector('.xterm-selection-layer').style.display = 'none';
        document.querySelector('.xterm-link-layer').style.display = 'none';
        document.querySelector('.xterm-cursor-layer').style.display = 'none';
        term.write(' ');
    }

  render() {
    return (
        <div className="terminalComponent">
            <div className="button-line">
                <button id="debug">KNOPKA</button>
            </div>
            <div className="terminal-text">
                
            </div>
        </div>
    );
  }
}





export default CodeEditor;





