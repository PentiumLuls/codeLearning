import React, {Component} from 'react';
import './App.css';
import Codeditor from '../CodeEditor/codeEditor'
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: true //SHOW POPUP ON START
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }


    render() {
        return (
            <div className="main">
                <div className="panel">kavo</div>
                <div className="editor">
                    <Codeditor></Codeditor>
                </div>
                <div className="terminal">
                    <button id="debug">RUN</button>
                </div>


                {//POPUP
                    this.state.showPopup ?
                    <PureModal
                        header="Functional programming. Getting started"
                        footer={<div><button onClick={this.togglePopup.bind(this)}>Понятноб</button></div>}
                        onClose={() => {
                            console.log('handle closing');
                            return true;
                        }}
                        isOpen
                        ref="modal"
                    >
                        <p>SOME text about functional programming</p>
                        <p>task text?</p>
                    </PureModal>
                        : null
                }
            </div>
        )

    }
}

export default App;
