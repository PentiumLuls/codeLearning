import React, {Component} from 'react';
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
        this.setState({textInConsole: code});
    }

    render() {
        if (!this.state.showPopup) {
            return (
                <div className="main">
                    <div className="panel">
                        <header className="userinfo">
                            <div className="avatar"><img alt="avatar"
                                                         src="https://pbs.twimg.com/media/DYzVb6jX4AEuvrJ.jpg"/></div>
                            <div className="userbuttons">
                                <span className="userbutton"><p>Knopka1</p></span>
                                <span className="userbutton active"><p>Knopka2</p></span>
                            </div>
                        </header>
                    </div>
                    <div className="editor">
                        <Codeditor updateTerminal={this.updateTerminal.bind(this)}></Codeditor>
                    </div>
                    <div className="terminal">
                        <Terminal textInConsole={this.state.textInConsole} className="terminal"></Terminal>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    {//POPUP
                        <Popup togglePopup={this.togglePopup.bind(this)}/>
                    }
                </div>
            )
        }


    }
}

export default App;