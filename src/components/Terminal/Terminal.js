import React, {Component} from 'react';
import Button from './Button/Button';
import {quests} from '../../plot/quests'

class Terminal extends Component {

    constructor() {
        super();
        /*this.writeReplics = (replica, name, key) => {
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
        };*/
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
                    information += `You must to use this: ${regexp.useIt}\n`
                }
                if (regexp.notUseIt.length !== 0) {
                    information += `D'nt use it: ${regexp.notUseIt}\n`
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

    /*nextReplic = () => {
        this.writeReplics(replics, "Gomuncul");
    };*/

    clearTerminal = () => {
        this.setState({
            content: ""
        })


        /*this.setState({
            replics: []
        });*/
    };


    componentDidMount() {
        /*this.writeReplics(svictor[0], "Mephisto", '1');*/
    }

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
                    <Button text="I VSE PONYAL" className="debug" func={this.nextReplic} isDialog={true}/>
                </div>
                    <ul className="terminal-text">
                        {
                            this.state.content
                        }
                    </ul>

                {/*<ul className="terminal-text">
                    {this.state.replics.map((r, i) => <li key={i}>{r}</li>)}
                </ul>*/}
            </div>
        );
    }
}

export default Terminal;