import React, {Component} from 'react';
import {dialogs} from "../../plot/dialogs";
import {quests} from "../../plot/quests";
import { connect } from 'react-redux'
import { writeCode, showAnswer } from '../../store/actions/codeActions'

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
            disabled: false
        }
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
        const state = this.state;
        state.showCloud = false
        state.visible = !state.visible;
        this.setState({state})
        if (this.props.currentQuest === 0) {
            this.writeReplics(dialogs[this.props.currentStage][0])
        }
    }

    getHints() {
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
        };
            let element = document.getElementById('box')    ;
            element.scrollTop=element.scrollHeight  ;        
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
                showCloud: 0
            })
            
        }
        
    }

    showAnswer = () => {
        this.setState({
            replics: [...this.state.replics, <li key={`answer`} className='hint'>Ответ записан в редактор</li>],
            answer: true
        })
        this.props.writeCode(true);
        this.props.showAnswer();
    }

    render() {

        if (this.props.currentQuest === 0 && this.state.showCloud === 0) {
            this.setState({showCloud: 1})
        }

        if (this.state.visible)

            return (
                
                <div className='chatbot'>
                    <div className="bot-top-panel">
                        <button className='buttonchatclose' onClick={this.showChat.bind(this)}>X</button>
                    </div>
                    <div className="dialogbox" id='box' ><ul>{this.state.replics.map((replic) => {
                        return (replic)
                    })}</ul></div>
            { /*<button className='chatbutton' onClick={this.getDialogs.bind(this)}>nextDialog</button>*/}
                <div className="bot-bottom-panel">
                    {this.state.disabled 
                    ? <button disabled className='chatbutton' onClick={this.getHints.bind(this)}>HINT</button>
                    : <button  className='chatbutton' onClick={this.getHints.bind(this)}>HINT</button>}
                    {this.state.answer 
                    ? <button disabled className='chatbutton' onClick={this.showAnswer}>ANSWER</button>
                    : <button className='chatbutton' onClick={this.showAnswer}>ANSWER</button>}
                    <button className='chatbutton' id="clear-chat" onClick={this.clearChat.bind(this)}>CLEAR CHAT</button>
                </div>
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
    
}
}

const mapStateToProps = store => {
    return {
        passStages: store.passStages,
        passQuests: store.passQuests,
        currentStage: store.currentStage,
        currentQuest: store.currentQuest
    }
}

const mapDispatchToProps = dispatch => {
    return {
        writeCode: (can) => dispatch(writeCode(can)),
        showAnswer: () => dispatch(showAnswer())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Chatbot);
