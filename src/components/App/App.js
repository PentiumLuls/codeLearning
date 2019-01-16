import React, { Component } from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
import Terminal from '../Terminal/Terminal'
import Popup from "../Popup/Popup";

class App extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: true //SHOW POPUP ON START
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    }

    updateTerminal(code) {
        this.textInConsole = code;
        console.log(code)
    }

    render() {
        return (
            <div className="main">
                <div className="panel">kavo</div>
                <div className="editor">
                    <Codeditor updateTerminal={this.updateTerminal.bind(this)}></Codeditor>
                </div>
                <div className="terminal">
                    <Terminal textInConsole={this.textInConsole} className="terminal"></Terminal>
                </div>


                {//POPUP
                    this.state.showPopup ?
                    <Popup togglePopup={this.togglePopup.bind(this)} />
                        : null }
                
            </div>
        )

    }
}

export default App;
