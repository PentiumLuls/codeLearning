import React, { Component } from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
import Terminal from '../Terminal/Terminal'

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="panel">kavo </div>
        <div className="editor">
          <Codeditor ></Codeditor>
        </div>
        <Terminal className="terminal"></Terminal>
      </div>
      )
      
  }
}

export default App;
