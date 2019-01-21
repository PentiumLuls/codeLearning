import React, {Component} from 'react';
import {svictor} from '../../plot/devil';
import {replics} from '../../plot/Object';
import Button from './Button/Button'

class Terminal extends Component {

    constructor() {
        super();
        this.writeReplics = (replica, name, key) => {
            let x = 0;
            let interval = setInterval(() => {
                let replic = `${name}:~$ ${replica[x++]}`;
                this.setState({
                    replics: [...this.state.replics, replic]
                });
                if (x >= replics.length) {
                    clearInterval(interval);
                    localStorage.button_run = key || 0;
                }
            }, 500);
        };
        this.state = {
            replics: [],
            testCode: "testCode",
            regexps: ""
        }
    }

    run = () => {

        try {
            const vm = require('vm');
            const codeToEvaluate = localStorage.getItem("code") + "\n" + this.state.testCode["code"]
                + "===" + this.state.testCode["answer"];
            const evaluatedAnswer = vm.runInThisContext(localStorage.getItem("code") + "\n" + this.state.testCode["answer"])

            if (vm.runInThisContext(codeToEvaluate) === true && this.checkForRegexp() === true) {
                document.querySelector('.terminal-text').textContent = "> " + this.state.testCode["code"] + "==" + evaluatedAnswer
                    + "\nOOO, you created it. wau i tell my friendes thet u are very cool";

            } else {
                document.querySelector('.terminal-text').textContent = "Hmmm... It doesn`t seem to work. Try again!"
            }

        } catch (err) {
            //PARSE ERROR
            err = err.stack.split("\n", 2);
            err[1] = err[1].split(" ").slice(-1) + ' ';
            err[1] = err[1].split(":");
            err[1] = "at (" + err[1][1] + ":" + err[1][2];
            err = err[0] + "\n" + err[1];

            document.querySelector('.terminal-text').textContent = err;
        }
    };

    checkForRegexp = () => {
        var fine = true;

        this.state.regexps.forEach((regexp) => {
            console.log(localStorage.code);
                if(localStorage.code.match(regexp) === null) {
                    console.log("regexp false");
                    fine = false;
                }
            });
        return fine;
    };

    nextReplic = () => {
        this.writeReplics(replics, "Gomuncul");
    };

    clearTerminal = () => {
        this.setState({
            replics: []
        });
    };


    componentDidMount() {
        this.writeReplics(svictor[0], "Mephisto", '1');
    }

    componentWillReceiveProps(nextValue) {
        this.setState({
            testCode: nextValue.testCode,
            regexps: nextValue.regexps
        });
    }


    render() {
        return (
            <div className="terminalComponent">
                <div className="button-line">
                    <Button text="RUN CODE" className="debug" func={this.run}/>
                    <Button text="CLEAR TERMINAL" className="debug" func={this.clearTerminal}/>
                    <Button text="I VSE PONYAL" className="debug" func={this.nextReplic} isDialog={true}/>
                </div>
                <ul className="terminal-text">
                    {this.state.replics.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
            </div>
        );
    }
}

export default Terminal;