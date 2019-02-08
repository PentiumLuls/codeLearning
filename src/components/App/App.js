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
import {tickTimeInGame, unlockAvatar} from '../../store/actions/statActions';
import nnnaaa from '../../audio/nnnaaa.ogg'
import sans from '../../audio/sans.ogg';
import Profile from '../Profile/Profile';
import {updateAchievements} from "../Profile/Achievements/achievementsHandler";

const music = {sans, nnnaaa};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: 0,
            terminalOpen: false,
            player: null,
            start: JSON.parse(localStorage['whiteList'])[0][0] !== 0
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
        if (this.state.start){
            this.setState({
                player: this.player
            });
            this.player.volume = this.props.musicValue
            this.player.play();
        }
    }
    
    componentDidUpdate() {
        if (this.state.player === null) {
            this.setState({
                player: this.player
            })
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.player) {
            this.player.volume = newProps.musicValue
        }
    }

    hideStart = () => {
        this.setState({
            start: true
        })
    }


    render() {
        
        console.log(this.state.start)
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
        if (canIShowPopup && this.showPopup && this.state.start) {
            delete newList[this.currentStage][indexOfElement];
            localStorage.setItem('whiteList', JSON.stringify(newList))
        }

        return (
            this.state.start ?

            <div className="main">

                <div>
                    <audio ref={(element) => {this.player = element}} src={music[this.props.music]} controls autoPlay loop>
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
                        : <Profile unlockAvatar={this.props.unlockAvatar}/>
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

            : <div onClick={this.hideStart} className="cutscene">
            <div className="cutscene-text">
            Спасибо за прохождение нашего квеста, надеемся вам понравилось и вы смогли выучить что-то новое.

Команда разработчиков:
-Рачкован Евгений
-Прокопчук Богдана
-Лапин Констянтин
-Волков Максим

Бета-тестеры и валидаторы:
-Дзензур Андрей
-Шлакоблоков Евгений

Отдельное спасибо компании Interlink и Александру Котову в частности
за предоставленую возможность разработки и своевременную помощь.

Если вам понравилась, или даже если не понравилась игра, вступайте в нашу конфу в телеге
там вы можете написать нам благодарность, или написать какие мы криворукие разрабы, на ваше усмотрение

https://t.me/joinchat/IuhFNxRsZDel-eHXTocl1g
            </div>
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
        musicValue: store.musicValue,
        music: store.music
    }
};

const mapDispatchToProps = dispatch => {
    window.unlockAvatar = (value) => dispatch(unlockAvatar(value));
    return {
        changeShowPopup: (can) => dispatch(changeShowPopup(can)),
        tickTimeInGame: () => dispatch(tickTimeInGame()),
        unlockAvatar: (value) => dispatch(unlockAvatar(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

