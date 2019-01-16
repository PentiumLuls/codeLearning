import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
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

    render() {
        return (
            <div className="main">
                <div className="panel">kavo</div>
                <div className="editor">
                    <Codeditor></Codeditor>
                </div>
                <div className="terminal">
                    <button id="debug">RUN</button>
                </div>


                {//POPUP
                    this.state.showPopup ?
                    <Popup togglePopup={this.togglePopup.bind(this)} />
                        : null }
                }
            </div>
        )

    }
}

export default App;
