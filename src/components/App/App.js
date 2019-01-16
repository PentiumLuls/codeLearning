import React, { Component } from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="panel">kavo </div>
        <div className="editor">
          <Codeditor ></Codeditor>
        </div>
        <div className="terminal">
            <div className="button-line">
                <button id="debug">KNOPKA</button>
            </div>
            <div className="terminal-text"></div>
        </div>
      </div>
      )
      
  }
}

export default App;
