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
        };
        ///////////////////////////////
        const self = this;
        window.terminal = {};
        window.terminal.log = (...args) => {self.log(JSON.stringify(args), "logger")};
        window.unlockQuest = this.unlockQuest;
        ///////////////////////////////
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
                this.props.updateLeftPanel(false);
            }
        }
    };

    log(text, logger) {
        this.setState((state) => ({
            content: state.content + "\n" + logger + "> " + text + "\n"
        }));
    }

    run = () => {
        try {
            const vm = require('vm');
            const codeToEvaluate = localStorage.getItem("code") + "\n" + this.props.testCode["code"]
            const regexp = this.checkForRegexp();

            //IF LEVEL IS NOT CHOSEN
            if (regexp == null) {
                this.log("Choose the quest before running your code, you mongrel.", '');
            } else {

                if (vm.runInThisContext(codeToEvaluate) === true && regexp.pass === true) {
                    this.log("Oh wow, you're not entirely hopeless after all. Good job.", '');
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

                    this.log("This doesn't work. Nothing you ever do is good enough.\n\n" + information, '');
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
                    <button onClick={this.resetCodeEditor}>RESET</button>
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
