import React, {Component} from 'react';
import { svictor } from '../../plot/devil';

class CodeEditor extends Component {

    constructor() {
        super();
        this.state={
            code: "NO CODE",
            replics: []
        }
    }


    run=  () => {
        try {
            document.querySelector('.terminal-text').textContent = eval(this.state.code);
        } catch (err) {
            document.querySelector('.terminal-text').textContent = err;
        }
    }


    componentDidMount() {
        const writeReplics = (replics, name) => {
            let x = 0;
            let interval = setInterval(() => {
                let replic = `${name}:~$ ${replics[x++]}`;
                this.setState({
                    replics: [...this.state.replics, replic]
                });
                if (x >= replics.length) {
                    clearInterval(interval);
                }
            }, 1000);

          
        }
        console.log(svictor);
        writeReplics(svictor, "SVictor");
        

    }
    
componentWillReceiveProps(nextValue) {
    this.setState({
        code: this.props.textInConsole
    })
}

  render() {
    return (
        <div className="terminalComponent">
            <div className="button-line">
                <button id="debug" onClick={this.run}>KNOPKA</button>
            </div>
            <ul className="terminal-text">
                { this.state.replics.map(r => <li>{r}</li>) }
            </ul>
        </div>
    );
  }

}

export default CodeEditor;



