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
        localStorage.setItem('button_run', 0);
        if (!localStorage['passStages']) {
            localStorage['passStages'] = 0
        }
        if (!localStorage['passQuests']) {
            localStorage['passQuests'] = 0
        }
        if (!localStorage['whiteList']) {
            localStorage['whiteList'] = JSON.stringify([[0, 1, 2, 5], [0, 2]]);
        }
        this.state = {
            showPopup: true,//SHOW POPUP ON START
            isEdit: false,
            stage: +localStorage.passStages,
            quest: +localStorage.passQuests,
            notUpdateEditor: 0
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

    writeQuest = (stageN, questN, popup=false) => {
        let newStage = this.state.stage;
        let newQuest = this.state.quest;
        newStage = stageN;
        newQuest = questN;

        if(newQuest == this.state.quest) {
            console.log("Handle re-choosing quest from left panel!")
        } else {
            this.setState({
                stage: newStage,
                quest: newQuest,
                updateLP: false,
                notUpdateEditor: 0
            })
        }
        if(popup) {
            this.updateLeftPanel();
            this.showTutorial();
        }
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

    // nextLevel = () => {
    //     console.log("NEXT LEVEL BUTTON");
    //     if (quests[this.state.stage].quests.length === this.state.quest + 1){
    //         this.setState({
    //             stage: this.state.stage + 1,
    //             quest: 0
    //         });
    //     } else {
    //         this.setState({
    //             quest: this.state.quest + 1
    //         });
    //     }
        
    //     this.showTutorial();
    // };


    render() {
        //проверка есть ли пройденый квест в вайт листе, если есть показать попап и удалить
        const newList = JSON.parse(localStorage.whiteList)
        const canIShowPopup = newList[this.state.stage].indexOf(+this.state.quest) !== -1;
        let indexOfElement = newList[this.state.stage].indexOf(+this.state.quest);
        if (canIShowPopup) {
            
            delete newList[this.state.stage][indexOfElement];
            localStorage.setItem('whiteList', JSON.stringify(newList))
        }

        return (
            <div className="main">
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
                    
                         <Codeditor
                                notUpdateEditor={this.state.notUpdateEditor}
                                text={quests[this.state.stage].quests[this.state.quest].code}/>
                            
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
                        nextLevel={this.writeQuest} />
                </div>
                </div>
                : <HellRules/>
            }
                <div>
                    <Chatbot/>
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