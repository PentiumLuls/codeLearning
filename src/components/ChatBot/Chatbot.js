import React, {Component} from 'react';
import {dialogs} from "../../plot/dialogs";
import {quests} from "../../plot/quests";

export default class Chatbot extends Component {

    constructor() {
        super();

        this.state = {
            visible: false,
            replics: [],
            content: [],
            dialogN: 0,
            hintsN: 0,
        }
    }

    writeReplics = (replics) => {
        /*let x = 0;
        let interval = setInterval(() => {
            let replic = `${name}:~$ ${replica[x++]}`;
            this.setState({
                replics: [...this.state.replics, replic]
            });
            if (x >= replics.length) {
                clearInterval(interval);
                localStorage.button_run = key || 0;
            }
        }, 1000);
*/

        let x = 0;
        let interval = setInterval(() => {
            let replic = `${replics.name}:~$ ${replics.text[x++]}`;
            this.setState({
                replics: [...this.state.replics, replic]
            });
            if (x >= replics.text.length) {
                clearInterval(interval);
            }
        }, 1000);
    };

    showChat() {
        const state = this.state;
        state.visible = !state.visible;
        this.setState({state})
    }

    getDialogs = () => {
        this.setState({
            content: this.state.replics.map((r, i) => <li key={i}>{r}</li>)
        });
    };

    getHints() {
        const hints = quests[localStorage.passStages].quests[localStorage.passQuests].hints;
        if (this.state.hintsN < hints.length) {
            this.setState({
                content: this.state.content + "\n" + hints[this.state.hintsN],
                hintsN: this.state.hintsN + 1,
            });
        }

        console.log(hints[this.state.hintsN])
    }

    componentDidMount() {
        this.writeReplics(dialogs[localStorage.passStages][localStorage.passQuests][this.state.dialogN]);
    }

    render() {
        {
            if (this.state.visible === true)
                return (
                    <div className='chatbot'>
                        <buttun className='buttonchatclose' onClick={this.showChat.bind(this)}>Close</buttun>
                        <div className="dialogbox">{this.state.content}</div>
                        <button className='chatbutton' >nextDialog</button>
                        <button className='chatbutton' onClick={this.getHints.bind(this)} >getHint</button>
                    </div>
                );
            return (
                <div>
                    <buttun className='buttonchatopen' onClick={this.showChat.bind(this)}>Chat</buttun>
                </div>
            )
        }
    }
}