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
                if (quests[localStorage.passStages].quests.length == +localStorage.passQuests + 1) {
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

        ////LOCAL VARS////
        //TYPE THIS TO COMPLETE CURRENT LEVEL
        const completePLZ = this.unlockQuest();

        //////////////////

        try {
            const vm = require('vm');
            const codeToEvaluate = localStorage.getItem("code") + "\n" + this.props.testCode["code"]
            const regexp = this.checkForRegexp();

            //IF LEVEL IS NOT CHOSEN
            if (regexp == null) {
                this.setState({
                    content: this.state.content + "\n> " + "Choose the quest before running your code, you mongrel." + "\n"
                });
            } else {

                if (vm.runInThisContext(codeToEvaluate) === true && regexp.pass === true) {
                    this.setState({
                        content: this.state.content + "\n> " + "Oh wow, you're not entirely hopeless after all. Good job." + "\n"
                    });

                    this.unlockQuest();

                } else {
                    let information = '';
                    if (regexp.useIt.length !== 0) {
                        information += `You should use ${this.parseRegexp(regexp.useIt)}\n`
                    }
                    if (regexp.notUseIt.length !== 0) {
                        information += `Don't use ${this.parseRegexp(regexp.notUseIt)}\n`
                    }
                    if (regexp.pass) {
                        information += "You don't pass all of the test cases. What a joke."
                    }

                    this.setState({
                        content: `${this.state.content}\n> This doesn't work. Nothing you ever do is good enough.\n\n 
                    ${information}`
                    });
                }
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

        try {
            this.props.regexps.forEach((regexp) => {
                if (localStorage.code.match(regexp) === null) {
                    checkRegExp.pass = false;
                    checkRegExp['useIt'] += regexp
                }
            });

            this.props.regexpsNone.forEach((regexp) => {
                if (!(localStorage.code.match(regexp) === null)) {
                    checkRegExp.pass = false;
                    checkRegExp['notUseIt'] += regexp
                }
            });

            return checkRegExp;
        } catch (e) {
            return null;
        }
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

    resetCodeEditor = () => {
        this.props.updateLeftPanel();
    }

    render() {
        return (
            <div className="terminalComponent">
                <div className="button-line">
                    <button className="debug" onClick={this.run}>RUN CODE</button>
                    <Button text="CLEAR TERMINAL" className="debug" func={this.clearTerminal}/>
                    <button  onClick={this.resetCodeEditor}>reset</button>
                    {
                         this.props.stage == +localStorage['passStages'] 
                         && this.props.quest == +localStorage['passQuests'] - 1
                         || this.props.stage == +localStorage['passStages'] - 1
                            ? <button onClick={
                                this.props.nextLevel.bind(this, localStorage.passStages, localStorage.passQuests)
                            } className="debug">NEXT LEVEL</button>
                            : null
                    }
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
