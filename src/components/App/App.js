import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
import HellRules from '../CodeEditor/HellRules'
import Terminal from '../Terminal/Terminal'
import Popup from "../Popup/Popup";
import Leftpanel from '../Leftpanel/Leftpanel';
import {quests} from '../../plot/quests';
import Chatbot from '../ChatBot/Chatbot';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: true,//SHOW POPUP ON START
            isEdit: false,
            stage: 0,
            quest: 0,
            notUpdateEditor: 0
        };
        localStorage.setItem('button_run', 0);
        if (!localStorage['passStages']) {
            localStorage['passStages'] = 0
        }
        if (!localStorage['passQuests']) {
            localStorage['passQuests'] = 0
        }
    }

    changeButtonState = () => {
        this.setState({isEdit: true});
    };
    changeButtonState2 = () => {
        this.setState({isEdit: false});
    };

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    }

    writeQuest = (stageN, questN) => {
        let newStage = this.state.stage;
        let newQuest = this.state.quest;
        newStage = stageN;
        newQuest = questN;

        this.setState({
            stage: newStage,
            quest: newQuest,
            updateLP: false,
            notUpdateEditor: 0
        })
    };

    updateLeftPanel = () => {
        this.setState({
            updateLP: !this.props.updateLP
        })
    };

    notUpdateEditor = () => {
        this.setState({
            notUpdateEditor: 1
        })
    };

    showTutorial = () => {
        this.togglePopup();
    };

    nextLevel = () => {
        console.log("NEXT LEVEL BUTTON");
        this.setState({
            quest: this.state.quest + 1,
        })
        this.showTutorial();
    };

    render() {

        return (
            <div className="main">
                <div className="leftpanel">
                    <Leftpanel notUpdateEditor={this.notUpdateEditor} updateLP={this.props.updateLP}
                               writeQuest={this.writeQuest}
                               func={this.changeButtonState} func2={this.changeButtonState2}/>
                </div>
                <div className="editor">
                    {
                        (!this.state.isEdit)
                            ? <Codeditor
                                notUpdateEditor={this.state.notUpdateEditor}
                                text={quests[this.state.stage].quests[this.state.quest].code}/>
                            : <HellRules/>}
                </div>
                <div className="terminal">
                    <Terminal
                        updateLeftPanel={this.updateLeftPanel}
                        className="terminal"
                        stage={this.state.stage}
                        quest={this.state.quest}
                        testCode={quests[this.state.stage].quests[this.state.quest].test}
                        regexps={quests[this.state.stage].quests[this.state.quest].regexps}
                        regexpsNone={quests[this.state.stage].quests[this.state.quest].regexpsNone}
                        showTutorial={this.showTutorial}
                        nextLevel={this.nextLevel} />
                </div>
                <div>
                    
                            <Chatbot/>
                    
                </div>


                {//POPUP
                    this.state.showPopup ?
                        <Popup stage={this.state.stage} quest={this.state.quest} togglePopup={this.togglePopup.bind(this)}/>
                        : null
                }
            </div>
        )

    }
}


export default App;