import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
import HellRules from '../CodeEditor/HellRules'
import Terminal from '../Terminal/Terminal'
import Popup from "../Popup/Popup";
import Leftpanel from '../Leftpanel/Leftpanel';
import {plot} from '../../plot/quests'


class App extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: true,//SHOW POPUP ON START
            isEdit:false,
            stage: 1,
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
        this.setState({textInConsole: code});
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
        console.log(stageN, questN)
    }


    render() {
        if (!this.state.showPopup) {
            return (
                <div className="main">
                    <div className="panel">
                       <Leftpanel writeQuest={this.writeQuest} func={this.changeButtonState} func2={this.changeButtonState2}/>
                    </div>
                    <div className="editor">
                        {(!this.state.isEdit) ? <Codeditor code={plot[this.state.stage].quests[this.state.quest].code}
                         updateTerminal={this.updateTerminal.bind(this)}></Codeditor> : <HellRules/>}
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