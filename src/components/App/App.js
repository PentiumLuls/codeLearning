import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
import HellRules from '../CodeEditor/HellRules'
import Terminal from '../Terminal/Terminal'
import Popup from "../Popup/Popup";
import Leftpanel from '../Leftpanel/Leftpanel';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: true,//SHOW POPUP ON START
            isEdit:false
        }
    }
    changeButtonState = () => {
        this.setState({isEdit: true});
    }
    changeButtonState2 = () => {
        this.setState({isEdit: false});
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
                       <Leftpanel func={this.changeButtonState} func2={this.changeButtonState2}/>
                    </div>
                    <div className="editor">
                        {(!this.state.isEdit) ? <Codeditor updateTerminal={this.updateTerminal.bind(this)}></Codeditor> : <HellRules/>}
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