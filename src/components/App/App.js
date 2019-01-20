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
            isEdit:false,
            stage: 0,
            quest: 0
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

    writeQuest = (stageN, questN) => {
        let newStage = this.state.stage;
        let newQuest = this.state.quest;
        newStage = stageN;
        newQuest = questN;

        this.setState({
            stage: newStage,
            quest: newQuest
        })
    }


    render() {
        if (!this.state.showPopup) {
            return (
                <div className="main">
                    <div className="panel">
                       <Leftpanel writeQuest={this.writeQuest} func={this.changeButtonState} func2={this.changeButtonState2}/>
                    </div>
                    <div className="editor">
                        {
                            (!this.state.isEdit)
                                ? <Codeditor updateTerminal={this.updateTerminal.bind(this)}
                                    text={quests[this.state.stage].quests[this.state.quest].code}/>
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