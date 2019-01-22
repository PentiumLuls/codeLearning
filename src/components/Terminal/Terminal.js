import React, {Component} from 'react';
import Button from './Button/Button';
import {quests} from '../../plot/quests'

class Terminal extends Component {

    constructor() {
        super();
        this.state = {
            /*replics: [],*/
            testCode: "testCode",
            regexps: "",
            regexpsNone: "",
            content: ""
        }
    }


    unlockQuest = () => {
        if (this.props.stage >= localStorage.passStages) {
            if (this.props.quest >= localStorage.passQuests) {
                if (quests[localStorage.passStages].quests.length == localStorage.passQuests + 1) {
                    localStorage.passStages = +localStorage.passStages + 1;
                    localStorage.passQuests = 0;
                } else {
                    localStorage.passQuests = +localStorage.passQuests + 1
                }
                this.props.updateLeftPanel();
            }
        }
    }


    run = () => {

        try {
            const vm = require('vm');
            const codeToEvaluate = localStorage.getItem("code") + "\n" + this.state.testCode["code"]
            const regexp = this.checkForRegexp();

            if (vm.runInThisContext(codeToEvaluate) === true && regexp.pass === true) {
                this.setState({
                    content: this.state.content + "\n> " + "  OOO, you created it. wau i tell my friendes thet u are very cool" + "\n"
                });

                this.unlockQuest();

            } else {
                let information = '';
                if (regexp.useIt.length !== 0) {
                    information += `You must to use this: ${this.parseRegexp(regexp.useIt)}\n`
                }
                if (regexp.notUseIt.length !== 0) {
                    information += `D'nt use it: ${this.parseRegexp(regexp.notUseIt)}\n`
                }
                if (regexp.pass) {
                    information += "You d'nt pass all test cases"
                }
                
                this.setState({
                    content: `${this.state.content}\n> Hmmm... It doesn't seem to work. Try again!\n\n 
                    ${information}`
                });
            }

        } catch (err) {
            //PARSE ERROR
            err = err.stack.split("\n", 2);
            err[1] = err[1].split(" ").slice(-1) + ' ';
            err[1] = err[1].split(":");
            err[1] = "at (" + err[1][1] + ":" + err[1][2];
            err = err[0] + "\n" + err[1];

            this.setState({
                content: this.state.content + "> " + err + "\n"
            });
        }
    };

    parseRegexp = (target) => {
        return target.split("/")[1];
    };

    checkForRegexp = () => {
        let checkRegExp = {
            pass: true,
            useIt: '',
            notUseIt: ''
        };

        this.state.regexps.forEach((regexp) => {
                if(localStorage.code.match(regexp) === null) {
                    checkRegExp.pass = false;
                    checkRegExp['useIt'] += regexp
                }
            });

        this.state.regexpsNone.forEach((regexp) => {
            if(!(localStorage.code.match(regexp) === null)) {
                checkRegExp.pass= false;
                checkRegExp['notUseIt'] += regexp
            }
        });

        return checkRegExp;
    };

    clearTerminal = () => {
        this.setState({
            content: ""
        })
    };

    componentWillReceiveProps(nextValue) {
        this.setState({
            testCode: nextValue.testCode,
            regexps: nextValue.regexps,
            regexpsNone: nextValue.regexpsNone,

        });
    }


    render() {
        return (
            <div className="terminalComponent">
                <div className="button-line">
                    <Button text="RUN CODE" className="debug" func={this.run}/>
                    <Button text="CLEAR TERMINAL" className="debug" func={this.clearTerminal}/>
                </div>
                    <ul className="terminal-text">
                        {
                            this.state.content
                        }
                    </ul>
            </div>
        );
    }
}

export default Terminal;