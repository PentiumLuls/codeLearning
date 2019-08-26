import React, {Component} from 'react';
import {dialogs} from "../../plot/dialogs";
import {quests} from "../../plot/quests";
import { connect } from 'react-redux';
import { writeCode, showAnswer, exportHideChat } from '../../store/actions/codeActions';
import { spendMoney, addMoney } from '../../store/actions/moneyActions';
import {updateAchievements} from "../Profile/Achievements/achievementsHandler";
import { connect_socket, send} from "../../services/ChatServise";
import { UsersChat } from "./UsersChat"

class Chatbot extends Component {

    constructor() {
        super();

        this.state = {
            visible: false,
            replics: [],
            replicN:0,
            dialogN: 0,
            hintsN: 0,
            showCloud: false,
            answer: false,
            disabled: false,
            userChat: false
        };

        window.cheatForMoney = (amount) => {this.props.addMoney(amount); updateAchievements(3)}
    }

    writeReplics = (replics) => {
        let x = 0;
        let interval = setInterval(() => {
            let replic = <li key={`replic${x}`} className='mephistoreplic'> {replics.text[x++]} </li> ;
            this.setState({
                replics: [...this.state.replics, replic],
            });
            if (x >= replics.text.length) {
                clearInterval(interval);
            }
        }, 2000);
    };

    showChat() {
        if (this.props.currentQuest === 0 && this.state.showCloud) {
            this.writeReplics(dialogs[this.props.currentStage][0])
        }
        this.setState({
            showCloud: false,
            visible: !this.state.visible
        })
        
    }

    getHints() {
        if (this.props.money - 5 >= 0) {
            const hints = quests[this.props.currentStage].quests[this.props.currentQuest].hints;
            const replics = this.state.replics;
            
            if(this.state.hintsN < hints.length){
                replics.push(<li key={`tip${this.state}`} className='hint'>{hints[this.state.hintsN]}</li>); 
                if (this.state.hintsN + 1 >= hints.length) {
                    this.setState({
                        replics,
                        hintsN: this.state.hintsN + 1,
                        disabled: true
                    });
                } else{
                    this.setState({
                        replics,
                        hintsN: this.state.hintsN + 1,
                    });
                }
                
                
            } else {     
                this.setState({
                    replics,
                    hintsN:1,
                    disabled: true
                });  
            }
            this.props.spendMoney(5);
        } else {
            this.setState({
                replics: [...this.state.replics, <li key={`answer`} className='hint'>Недостаточно сыра!</li>],
            })
        }
        let element = document.getElementById('box');
        element.scrollTop=element.scrollHeight;

        updateAchievements(14);
    }

    clearChat(){
        this.setState({
            replics: [],
            replicN:0,
            dialogN: 0,
            hintsN: 0,
            showCloud: 3
        })
    }

    componentWillUpdate(nextProps) {
        if (this.props.currentQuest != nextProps.currentQuest) {
            this.setState({
                replics: [],
                hintsN: 0,
                disabled: false,
                answer: false,
                showCloud: 0,
                visible: false
            })
            
        }
        
    }

    showAnswer = () => {
        if (this.props.money - 20 >= 0) {
            this.setState({
                replics: [...this.state.replics, <li key={`answer`} className='hint'>Ответ записан в редактор</li>],
                answer: true
            });
            this.props.writeCode(true);
            this.props.showAnswer();
            this.props.spendMoney(20);
        } else {
            this.setState({
                replics: [...this.state.replics, <li key={`answer`} className='hint'>Недостаточно сыра!</li>],
            })
        }
        
    };

    hideChat = () => {
        this.setState({
            visible: false
        })
    };

    switchToStory() {
        this.setState({
            userChat: false
        });
    }

    switchToUser() {
        this.setState({
            userChat: true
        });
    }

    render() {
        let chatPanel;

        if (this.props.currentQuest === 0 && this.state.showCloud === 0) {
            this.setState({showCloud: 1})
        }

        if (this.state.userChat) {
            chatPanel = <UsersChat />;
        } else {
            chatPanel = <div><div className="dialogbox" id='box' ><ul>{this.state.replics.map((replic) => {
                    return (replic)
                })}</ul></div>
                <div className="bot-bottom-panel">
                    {this.state.disabled 
                    ? <button disabled className='chatbutton' id="hint" onClick={this.getHints.bind(this)}>HINT</button>
                    : <button  className='chatbutton' id="hint" onClick={this.getHints.bind(this)}>HINT</button>}
                    {this.state.answer 
                    ? <button disabled className='chatbutton' id="answer" onClick={this.showAnswer}>ANSWER</button>
                    : <button className='chatbutton' id="answer" onClick={this.showAnswer}>ANSWER</button>}
                    <button className='chatbutton' id="clear-chat" onClick={this.clearChat.bind(this)}>CLEAR CHAT</button>
                </div></div>
        }

        if (this.state.visible)

            return (
                
                <div className='chatbot'>
                    <div className="bot-top-panel">
                        <button disabled={!this.state.userChat} className='switch_chat_button' onClick={this.switchToStory.bind(this)}>Story chat</button>
                        <button disabled={this.state.userChat} className='switch_chat_button' onClick={this.switchToUser.bind(this)}>Users chat</button>
                        <button className='buttonchatclose' onClick={this.showChat.bind(this)}>X</button>
                    </div>
                    {chatPanel}
                </div>
            );
        return (
            <div className="chatbutton-wrapper">
                {this.state.showCloud === 1 ?<div className="bubble">
                        Новое сообщение!
                    </div> : null}
                <button className='buttonchatopen' onClick={this.showChat.bind(this)}>CHAT</button>
            </div>
        )
}

componentDidMount() {
    if (this.props.currentQuest === 0) {
        this.setState({
            showCloud: 1
        })
    }
    this.props.exportHideChat(this.hideChat)
}
}

const mapStateToProps = store => {
    return {
        passStages: store.passStages,
        passQuests: store.passQuests,
        currentStage: store.currentStage,
        currentQuest: store.currentQuest,
        money: store.money
    }
};

const mapDispatchToProps = dispatch => {
    return {
        writeCode: (can) => dispatch(writeCode(can)),
        showAnswer: () => dispatch(showAnswer()),
        spendMoney: (amount) => dispatch(spendMoney(amount)),
        addMoney: (amount) => dispatch(addMoney(amount)),
        exportHideChat: (func) => dispatch(exportHideChat(func))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Chatbot);
