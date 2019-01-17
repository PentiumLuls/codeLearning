import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
import Terminal from '../Terminal/Terminal'
import Popup from "../Popup/Popup";
import Leftpanel from '../Leftpanel/Leftpanel';

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
                       <Leftpanel/>
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