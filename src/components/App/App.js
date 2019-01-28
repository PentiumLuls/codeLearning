import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
import HellRules from '../CodeEditor/HellRules'
import Terminal from '../Terminal/Terminal'
import Popup from "../Popup/Popup";
import Leftpanel from '../Leftpanel/Leftpanel';
import {quests} from '../../plot/quests';
import Chatbot from '../ChatBot/Chatbot'; 
import { formatWithOptions } from 'util';
import ReactAudioPlayer from 'react-audio-player';
import sound from '../../audio/sans.mp3'
import sound2 from '../../audio/sans.ogg'
class App extends Component {
    constructor() {
        super();
        localStorage.setItem('button_run', 0);
        if (!localStorage['passStages']) {
            localStorage['passStages'] = 0
        }
        if (!localStorage['passQuests']) {
            localStorage['passQuests'] = 0
        }
        if (!localStorage['currentStage']) {
            localStorage['currentStage'] = localStorage.passStages;
        }
        if (!localStorage['currentQuest']) {
            localStorage['currentQuest'] = localStorage.passQuests;
        }
        if (!localStorage['whiteList']) {
            localStorage['whiteList'] = JSON.stringify([[0, 1, 2, 3, 4, 6], [0, 2]]);
        }
        this.state = {
            showPopup: true,//SHOW POPUP ON START
            isEdit: false,
            stage: +localStorage.passStages,
            quest: +localStorage.passQuests,
            notUpdateEditor: 0,
            answer: false
        };
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

    writeQuest = (stageN, questN, popup=false, answer=false) => {

        let newStage = this.state.stage;
        let newQuest = this.state.quest;
        

        if (answer) {

            this.setState({
                answer: answer
            }, () => console.log(answer))
            
            
        } else {
            newStage = stageN;
            newQuest = questN;
            this.setState({
                stage: newStage,
                quest: newQuest,
                updateLP: false,
                notUpdateEditor: 0,
                answer: answer
            })
        }
        localStorage.currentStage = stageN;
        localStorage.currentQuest = questN;
        
        if(popup) {
            this.updateLeftPanel();
            this.showTutorial();
        }
    };

    updateLeftPanel = (popup) => {
        this.setState({
            updateLP: !this.props.updateLP,
            showPopup: popup
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

    renderCodeEditor = () => {
        return (
            <Codeditor
                                notUpdateEditor={this.state.notUpdateEditor}
                                textAnswer={quests[this.state.stage].quests[this.state.quest].test.answer}
                                text={quests[this.state.stage].quests[this.state.quest].code}
                                answer={this.state.answer}/>
        )
    }

    

    render() {
        //проверка есть ли пройденый квест в вайт листе, если есть показать попап и удалить
        const newList = JSON.parse(localStorage.whiteList);
        const canIShowPopup = newList[localStorage.passStages].indexOf(+localStorage.passQuests) !== -1;
        let indexOfElement = newList[localStorage.passStages].indexOf(+localStorage.passQuests);
        if (canIShowPopup && this.state.showPopup) {
            
            delete newList[localStorage.passStages][indexOfElement];
            localStorage.setItem('whiteList', JSON.stringify(newList))
        }

        return (
            <div className="main">
                <div>
                    <ReactAudioPlayer
                        src={sound2}
                        autoPlay
                        loop
                        controls
                    />
                </div>
                <div className="leftpanel">
                    <Leftpanel notUpdateEditor={this.notUpdateEditor} updateLP={this.props.updateLP}
                               writeQuest={this.writeQuest}
                               func={this.changeButtonState} func2={this.changeButtonState2}
                               stage={this.state.stage}
                               quest={this.state.quest} />
                </div>
                {
                (!this.state.isEdit)
                ?
                <div>
                <div className="editor">
                    
                         {this.renderCodeEditor()}
                            
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
                        nextLevel={this.writeQuest}
                        />
                </div>
                </div>
                : <HellRules/>
            }
                <div>
                    {
                        (!this.state.isEdit) ? <Chatbot stage={this.state.stage}
                        quest={this.state.quest}/> : null
                    }
                </div>


                {//POPUP

                
                    this.state.showPopup && canIShowPopup?
                        <Popup stage={this.state.stage} quest={indexOfElement} togglePopup={this.togglePopup.bind(this)}/>
                        : null
                }
            </div>
        )

    }
}


export default App;