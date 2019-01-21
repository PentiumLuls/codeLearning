import React, {Component} from 'react';
import {dialogs} from "../../plot/dialogs";

export default class Chatbot extends Component {

    constructor() {
        super();

        this.state = {
            visible: false,
            replics: [],
            content: [],
            dialogN: 0,
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
                localStorage.button_run = key || 0;
            }
        }, 1000);
    };

    showChat() {
        const state = this.state;
        state.visible = !state.visible;
        this.setState({state})
    }

    getContent() {
        return (this.state.content)
    }


    getDialogs = () => {
        return (
            this.state.replics.map((r, i) => <li key={i}>{r}</li>)
        );
    };

    getHints() {
        this.setState({
            content: this.state.content + "\n"
        })
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
                        <div className="dialogbox">{this.getContent.bind(this)}</div>
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