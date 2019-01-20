import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
import HellRules from '../CodeEditor/HellRules'
import Terminal from '../Terminal/Terminal'
import Popup from "../Popup/Popup";
import Leftpanel from '../Leftpanel/Leftpanel';
import {quests} from '../../plot/quests';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: true,//SHOW POPUP ON START
            isEdit:false
        }
        localStorage.setItem('button_run', 0);
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
        this.setState({textInEditor: code});
    }

    render() {
        if (!this.state.showPopup) {
            return (
                <div className="main">
                    <div className="panel">
                       <Leftpanel func={this.changeButtonState} func2={this.changeButtonState2}/>
                    </div>
                    <div className="editor">
                        {
                            (!this.state.isEdit)
                                ? <Codeditor updateTerminal={this.updateTerminal.bind(this)}
                                    text={quests["Кайся глупец"][0]["Индусская катастрофа"][1]}/>
                                : <HellRules/>}
                    </div>
                    <div className="terminal">
                        <Terminal textInEditor={this.state.textInEditor} className="terminal"/>
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