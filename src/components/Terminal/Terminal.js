
import React, { Component } from 'react';
import { svictor } from '../../plot/devil';

class CodeEditor extends Component {

    constructor() {
        super();
        // this.SVictor = SVictor;
        this.state = {
            replics: []
        }
    }

    componentDidMount() {
        const writeReplics = (replics) => {
            let x = 0;
            let interval = setInterval(() => {
                let replic = `${replics.constructor.name}: ${replics[x++]} ${x}`;
                this.setState({
                    replics: [...this.state.replics, replic]
                });
                if (x >= replics.length) {
                    clearInterval(interval);
                }
            }, 1000);

          
        }
        console.log(svictor);
        writeReplics(svictor);
    }
    

    componentWillReceiveProps() {
        console.log('component will update')
    }

  render() {
    return (
        <div className="terminalComponent">
            <div className="button-line">
                <button id="debug">KNOPKA</button>
            </div>
            <ul className="terminal-text">
                { this.state.replics.map(r => <li>{r}</li>) }
            </ul>
        </div>
    );
  }

}

export default CodeEditor;





