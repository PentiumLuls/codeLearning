import React, {Component} from 'react';
import {dialogs} from "../../plot/dialogs";

export default class Chatbot extends Component {

    constructor() {
        super();

        this.state = {
            visible: false,
            replics: [],
        }
    }

    writeReplics = (replica, name, key) => {
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
            let replic = `${name}:~$ ${replica[x++]}`;
            this.setState({
                replics: [...this.state.replics, replic]
            });
            if (x >= dialogs.length) {
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


    getDialogs = () => {
        return (
            <ul className="chatDialogs">
                {this.state.replics.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
        )
    };


    render() {
        {
            if (this.state.visible === true)
                return (
                    <div className='chatbot'>
                        <buttun className='buttonchatclose' onClick={this.showChat.bind(this)}>Close</buttun>
                        <div className="dialogbox">{this.getDialogs.bind(this)}</div>
                        <buttun className='chatbuttun'   >nextDialog</buttun> <buttun className='chatbuttun'  >getHint</buttun>
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