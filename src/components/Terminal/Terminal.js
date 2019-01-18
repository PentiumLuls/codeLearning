import React, {Component} from 'react';
import { svictor } from '../../plot/devil';
import { replics } from '../../plot/Object';
import Button from './Button/Button'


class Terminal extends Component {


    constructor() {
        super();
        this.writeReplics = (replica, name, func) => {
            let x = 0;
            let interval = setInterval(() => {
                let replic = `${name}:~$ ${replica[x++]}`;
                this.setState({
                    replics: [...this.state.replics, replic]
                });
                if (x >= replics.length) {
                    clearInterval(interval);
                    if (func !== undefined) {
                        func(replics, "Object");
                    }
                }
            }, 500);  
        };
        this.state={
            code: "NO CODE",
            replics: []
        }
        
    }

    run = () => {
        try {
            document.querySelector('.terminal-text').textContent = eval(this.state.code);
        } catch (err) {
            document.querySelector('.terminal-text').textContent = err;
        }
    }

    nextReplic = () => {
        this.writeReplics(replics, "Object");
    }

    clearTerminal = () => {
        this.setState({
            replics: []
        });
    }


    componentDidMount() {
        console.log(svictor);
         this.writeReplics(svictor[0], "SVictor");
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
                <Button text="RUN CODE" className="debug" func={this.run}></Button>
                <Button text="CLEAR TERMINAL" className="debug" func={this.clearTerminal}></Button>
                <Button text="I VSE PONYAL" className="debug" func={this.nextReplic}></Button>
            </div>
            <ul className="terminal-text">
                { this.state.replics.map(r => <li>{r}</li>) }
            </ul>
        </div>
    );
  }

}

export default Terminal;



