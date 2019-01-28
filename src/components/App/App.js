import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
import HellRules from '../CodeEditor/HellRules'
import Terminal from '../Terminal/Terminal'
import Popup from "../Popup/Popup";
import Leftpanel from '../Leftpanel/Leftpanel';
import {quests} from '../../plot/quests';
import Chatbot from '../ChatBot/Chatbot'; 
import { connect } from 'react-redux';
import { selectStage, selectQuest } from '../../store/actions/questActions'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: true, //SHOW POPUP ON START
            isEdit: false,
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

    showTutorial = () => {
        this.togglePopup();
    };


    

    render() {

        this.passStages = this.props.passStages;
        this.passQuests = this.props.passQuests;
        this.currentStage = this.props.currentStage;
        this.currentQuest = this.props.currentQuest;
        this.writeCode = this.props.writeCode;
        this.code = this.props.code;

        //проверка есть ли пройденый квест в вайт листе, если есть показать попап и удалить
        const newList = JSON.parse(localStorage.whiteList);
        const canIShowPopup = newList[this.passStages].indexOf(this.passQuests) !== -1;
        let indexOfElement = newList[this.passStages].indexOf(this.passQuests);
        if (canIShowPopup && this.state.showPopup) {
            
            delete newList[this.passStages][indexOfElement];
            localStorage.setItem('whiteList', JSON.stringify(newList))
        }

        return (
            <div className="main">
                <div className="leftpanel">
                    <Leftpanel  func={this.changeButtonState}
                                func2={this.changeButtonState2}/>
                </div>
                {
                (!this.state.isEdit)
                ?
                <div>
                <div className="editor">
                    <Codeditor
                        textAnswer={quests[this.currentStage].quests[this.currentQuest].test.answer}
                        text={this.code}
                        answer={this.state.answer}
                        writeCode={this.writeCode}
                        resets={this.props.resets}
                        />
                </div>
                <div className="terminal">
                    <Terminal
                        updateLeftPanel={this.updateLeftPanel}
                        className="terminal"
                        testCode={quests[this.currentStage].quests[this.currentQuest].test}
                        regexps={quests[this.currentStage].quests[this.currentQuest].regexps}
                        regexpsNone={quests[this.currentStage].quests[this.currentQuest].regexpsNone}
                        showTutorial={this.showTutorial}
                        nextLevel={this.writeQuest}
                        />
                </div>
                </div>
                : <HellRules/>
            }
                <div>
                    {
                        (!this.state.isEdit) ? <Chatbot stage={this.currentStage}
                        quest={this.currentQuest}/> : null
                    }
                </div>
                {//POPUP 

                    this.state.showPopup && canIShowPopup?
                        <Popup stage={this.currentStage} quest={indexOfElement} togglePopup={this.togglePopup.bind(this)}/>
                        : null
                }
            </div>
        )

    }
}


const mapStateToProps = store => {
    console.log(store);
    return {
        passStages: store.passStages,
        passQuests: store.passQuests,
        currentStage: store.currentStage,
        currentQuest: store.currentQuest,
        writeCode: store.writeCode,
        code: store.code,
        resets: store.resets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectStage,
        selectQuest
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);