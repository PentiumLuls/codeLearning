import React, {Component} from 'react';
import {quests} from '../../plot/quests'
import {connect} from 'react-redux';
import {nextLevel, passQuest} from '../../store/actions/questActions'
import {
    resetCode,
    writeCode,
    changeShowPopup,
    clearTerminal,
    exportRun,
    exportHideNextCode
} from '../../store/actions/codeActions'
import {addSuccessfulRun, addUnsuccessfulRun} from '../../store/actions/statActions'

class Terminal extends Component {
    constructor() {

        super();
        this.state = {
            testCode: "testCode",
            regexps: "",
            regexpsNone: "",
            content: "",
            showNextLevel: false
        };
        ///////////////////////////////
        const self = this;
        window.terminal = {};
        window.terminal.log = (...args) => {
            const result = (args.map(arg => {
                return JSON.stringify(arg)
            }));
            self.log(result.join(","), "logger")
        };
        window.unlockQuest = this.unlockQuestCheat;
        window.reporterLog = (text, status) => {
            self.reporterLog(text, status)
        };
        ///////////////////////////////
    }

    log(text, logger) {
        this.setState((state) => ({
            content: state.content + "\n" + logger + "> " + text + "\n"
        }));

        this.props.updateAchievements();
    }

    reporterLog = (text, status) => {
        let stat = status === true ? 'PASS' : 'FAIL';
        this.setState((state) => ({
            content: state.content + "\n[" + stat + "] " + text + "\n"
        }));

        this.props.updateAchievements();
    };

    unlockQuestCheat = () => {
        this.log("~NEXT LEVEL CHEAT ACTIVATED/ F*CKING CHEATER!!!", '');
        this.setState({
            showNextLevel: true
        });
        this.props.writeCode(false);
        this.props.passQuest();

        this.props.updateAchievements(4);
    };

    unlockQuest = () => {
        this.log("Oh wow, you're not entirely hopeless after all. Good job.", '');
        this.setState({
            showNextLevel: true
        });
        this.props.writeCode(false);
        this.props.passQuest();

        this.props.updateAchievements();
    };

    run = () => {

        try {
            const vm = require('vm');
            const codeToEvaluate = localStorage.getItem("code") + "\n" + this.props.testCode["code"];
            const regexp = this.checkForRegexp();

            //IF LEVEL IS NOT CHOSEN
            if (regexp == null) {
                this.log("Choose the quest before running your code, you mongrel.", '');
            } else {

                if (vm.runInThisContext(codeToEvaluate) === true && regexp.pass === true) {
                    this.unlockQuest();
                    this.props.addSuccessfulRun();
                } else {
                    this.props.addUnsuccessfulRun();
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

        this.props.updateAchievements();
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
        });

        this.props.updateAchievements();
    };

    componentWillReceiveProps(nextValue) {
        this.setState({
            testCode: nextValue.testCode,
            regexps: nextValue.regexps,
            regexpsNone: nextValue.regexpsNone,
        });

        this.props.updateAchievements();
    }

    resetCode = () => {
        this.props.writeCode(true);
        this.props.resetCode();

        this.props.updateAchievements();
    };

    clickNextLevel = () => {
        this.props.nextLevel();
        this.setState({
            showNextLevel: false
        });
        this.props.writeCode(true);
        this.props.resetCode();
        this.props.changeShowPopup(true);
        this.clearTerminal();

        this.props.updateAchievements();
    };

    hideNextLevel = () => {
        this.setState({
            showNextLevel: false
        })
    };


    render() {
        this.passStages = this.props.passStages;
        this.passQuests = this.props.passQuests;
        this.currentStage = this.props.currentStage;
        this.currentQuest = this.props.currentQuest;

        this.props.exportHideNextLevel(this.hideNextLevel);

        return (
            <div className="terminalComponent">
                <div className="button-line">
                    <button className="debug" onClick={this.run}>RUN CODE</button>
                    <button className="debug" onClick={this.clearTerminal}>CLEAR TERMINAL</button>
                    <button onClick={this.resetCode}>RESET</button>
                    {/*<button onClick={this.props.nextLevel.bind(this, 0 , 0, false, true)}>SHOW ANSWER</button>*/}
                    {
                        this.state.showNextLevel
                            ? <button onClick={
                                this.clickNextLevel}
                                      className="debug">NEXT LEVEL</button>
                            : null
                    }
                    <button className="button-open-terminal" onClick={this.props.openTerminal}>*</button>
                </div>
                <ul className={this.props.terminalOpen ? "terminal-text open-terminal-text" : "terminal-text"}>
                    {
                        this.state.content
                    }
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.props.clearTerminal(this.clearTerminal);
        this.props.exportRun(this.run);
    }
}

const mapStateToProps = store => {
    return {
        passStages: store.passStages,
        passQuests: store.passQuests,
        currentStage: store.currentStage,
        currentQuest: store.currentQuest
    }
};

const mapDispatchToProps = dispatch => {
    return {
        resetCode: () => dispatch(resetCode()),
        writeCode: (can) => dispatch(writeCode(can)),
        nextLevel: () => dispatch(nextLevel()),
        passQuest: () => dispatch(passQuest()),
        changeShowPopup: (can) => dispatch(changeShowPopup(can)),
        clearTerminal: (func) => dispatch(clearTerminal(func)),
        exportRun: (func) => dispatch(exportRun(func)),
        exportHideNextLevel: (func) => dispatch(exportHideNextCode(func)),
        addSuccessfulRun: () => dispatch(addSuccessfulRun()),
        addUnsuccessfulRun: () => dispatch(addUnsuccessfulRun())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
