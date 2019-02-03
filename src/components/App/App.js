import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor';
import HellRules from '../CodeEditor/HellRules';
import Terminal from '../Terminal/Terminal';
import Popup from "../Popup/Popup";
import Leftpanel from '../Leftpanel/Leftpanel';
import {quests} from '../../plot/quests';
import Chatbot from '../ChatBot/Chatbot';
import {connect} from 'react-redux';
import {changeShowPopup} from '../../store/actions/codeActions';
import sound from '../../audio/sans.mp3';
import sound2 from '../../audio/sans.ogg';
import Profile from '../Profile/Profile';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: 0,
            terminalOpen: false
        };
    }

    changeButtonState = () => {
        this.setState({isEdit: 1});
    };
    changeButtonState2 = () => {
        this.setState({isEdit: 0});
    };
    changeButtonState3 = () => {
        this.setState({isEdit: 2});
    };

    togglePopup = () => {
        this.props.changeShowPopup(false);
    };

    exportRun = (func) => {
        this.setState({
            run: func
        })
    };

    openTerminal = () => {
        console.log("Terminal mode x2 toggle");
        this.setState({
            terminalOpen: !this.state.terminalOpen
        })
    };

    render() {
        this.passStages = this.props.passStages;
        this.passQuests = this.props.passQuests;
        this.currentStage = this.props.currentStage;
        this.currentQuest = this.props.currentQuest;
        this.writeCode = this.props.writeCode;
        this.code = this.props.code;
        this.showPopup = this.props.showPopup;

        //проверка есть ли пройденый квест в вайт листе, если есть показать попап и удалить
        const newList = JSON.parse(localStorage.whiteList);
        const canIShowPopup = newList[this.currentStage].indexOf(this.currentQuest) !== -1;
        let indexOfElement = newList[this.currentStage].indexOf(this.currentQuest);
        if (canIShowPopup && this.showPopup) {

            delete newList[this.currentStage][indexOfElement];
            localStorage.setItem('whiteList', JSON.stringify(newList))
        }

        return (
            <div className="main">

                <div>
                    <audio controls autoPlay loop>
                        <source src={sound2} type="audio/ogg"/>
                        <source src={sound} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div className="leftpanel">
                    <Leftpanel func={this.changeButtonState}
                               func2={this.changeButtonState2}
                               func3={this.changeButtonState3}/>
                </div>
                {
                    (this.state.isEdit === 0)
                        ?
                        <div>
                            <div className={this.state.terminalOpen ? 'editor open-editor' : 'editor'}>
                                <Codeditor
                                    text={this.code}
                                    writeCode={this.writeCode}
                                    resets={this.props.resets}
                                />
                            </div>
                            <div className={this.state.terminalOpen ? 'terminal open-terminal' : 'terminal'}>
                                <Terminal
                                    terminalOpen={this.state.terminalOpen}
                                    className="terminal"
                                    testCode={quests[this.currentStage].quests[this.currentQuest].test}
                                    regexps={quests[this.currentStage].quests[this.currentQuest].regexps}
                                    regexpsNone={quests[this.currentStage].quests[this.currentQuest].regexpsNone}
                                    openTerminal={this.openTerminal}
                                    updateAchievements={this.updateAchievements}
                                />
                            </div>
                        </div>
                        : (this.state.isEdit === 1)
                        ? <HellRules passStages={this.passStages} passQuests={this.passQuests}/>
                        : <Profile></Profile>
                }
                <div>
                    {
                        (this.state.isEdit === 0) ? <Chatbot/> : null
                    }
                </div>
                {//POPUP

                    this.showPopup && canIShowPopup ?
                        <Popup stage={this.currentStage} quest={indexOfElement} togglePopup={this.togglePopup}/>
                        : null
                }

            </div>
        )

    }

    updateAchievements = (id, value) => {
        let achievements = JSON.parse(localStorage['achievements']);

        ////LEVELS PASSING////
        //PASS 3 QUESTS ACHIEVEMENT
        if (achievements[0].status === 0 && ((this.passStages === 0 && this.passQuests >= 3) || (this.passStages > 0))) {
            achievements[0].status = 1;
            console.log("Achievement unlocked! You have pass 3 quests");
        }
        //PASS 1st STAGE
        if (achievements[1].status === 0 && this.passStages >= 1) {
            achievements[1].status = 1;
            console.log("Achievement unlocked! You have pass 1st stage");
        }
        //PASS 3 STAGES
        if (achievements[2].status === 0 && this.passStages >= 3) {
            achievements[2].status = 1;
            console.log("Achievement unlocked! You have pass 3 stages");
        }
        
        ////CHEAT ACHIEVEMENTS////
        //MONEY CHEAT USING 1st TIME
        if (achievements[3].status === 2) {
            achievements[3].status = 1;
            console.log("Achievement unlocked! You are f*cking cheater! (USED MONEY CHEAT)");
        }
        //QUEST UNLOCK CHEAT
        if (id === 4 && achievements[4].status === 0) {
            achievements[4].time += 1;
            if (achievements[4].time === 1) {
                achievements[4].status = 1;
                console.log("Achievement unlocked! Dude, it`s not right! (USED QUEST UNLOCK CHEAT 1st time)");
            }
            if (achievements[4].time === 10) {
                console.log("Achievement unlocked! You`ve just ruined the game! (USED QUEST UNLOCK CHEAT 10 times)");
            }
        }
        //MONEY CHEAT 1M money ADDED
        /*if (achievements[5].status === 2 && //added 1000000 money?) {
            achievements[5].status = 1;
            console.log("Achievement unlocked! BBBILIONEER! You cheated 1000000 money");
        }*/

        localStorage['achievements'] = JSON.stringify(achievements);
        console.log("ACHIEVEMENTS UPDATED!");
    };
}


const mapStateToProps = store => {
    return {
        passStages: store.passStages,
        passQuests: store.passQuests,
        currentStage: store.currentStage,
        currentQuest: store.currentQuest,
        writeCode: store.writeCode,
        code: store.code,
        resets: store.resets,
        showPopup: store.showPopup,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeShowPopup: (can) => dispatch(changeShowPopup(can))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

