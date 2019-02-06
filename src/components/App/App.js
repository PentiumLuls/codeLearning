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
import {tickTimeInGame} from '../../store/actions/statActions';
import sound from '../../audio/sans.mp3';
import sound2 from '../../audio/sans.ogg';
import Profile from '../Profile/Profile';
import {updateAchievements} from "../Profile/Achievements/achievementsHandler";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: 0,
            terminalOpen: false,
            player: null
        };
        
        this.globalTime = setInterval(() => {
            this.props.tickTimeInGame()
        }, 1000);

        this.player = null

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
        });
        updateAchievements(11);
    };

    componentDidMount() {
        this.setState({
            player: this.player
        });
        this.player.volume = this.props.musicValue
        this.player.play();
    }

    componentWillReceiveProps() {
        if (this.player) {
            this.player.volume = this.props.musicValue
        }
    }


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
                    <audio ref={(element) => {this.player = element}} src={sound2} controls autoPlay loop>
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
                                    player={this.state.player}
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

    updateAchievements = updateAchievements;
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
        musicValue: store.musicValue
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeShowPopup: (can) => dispatch(changeShowPopup(can)),
        tickTimeInGame: () => dispatch(tickTimeInGame())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

