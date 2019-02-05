import React, {Component} from 'react'
import {quests} from '../../plot/quests'
import { connect } from 'react-redux';
import { selectStage, selectQuest, nextStep, prevStep } from '../../store/actions/questActions'
import { resetCode, writeCode, changeShowPopup } from '../../store/actions/codeActions'


class Tasklist extends Component {

    back = () => {
        this.props.prevStep();
        if (this.step == 1) {
            this.props.writeCode(false);
            this.props.selectQuest(1);
        }
    }

    next = (index) => {
        this.props.func2();
        if (this.step == 0) {
            this.props.writeCode(false);
            this.props.selectStage(index);
            this.props.nextStep();

        } else if (this.step == 1) {
            this.props.clear();
            this.props.writeCode(true);
            this.props.selectQuest(index);
            this.props.nextStep();
            this.props.resetCode();
            this.props.changeShowPopup(true);
        }
    }

    getRecord = (stage, quest) => {
        let record = this.props.records[stage][quest];
        if (record) {
            return `${record / 60 ^ 0 < 10 ? '0' + (record / 60 ^ 0) : record / 60 ^ 0 }:${record % 60 < 10 ? '0' + (record % 60) : record % 60}`
        } 
        return '00:00'
        
    }

    generateList = () => {
        if (this.step == 0) {
            return (
                quests.map((stage, index) => {
                    return (<li key={index} 
                        onClick={index <= this.passStages ? this.next.bind(this, index) : null}
                         className={index <= this.passStages ? "questlist" : "questlist inactive"}>{stage.title}<span className="quest-timer">000</span></li>)
                })
            )
        } else if (this.step == 1) {
            return (
                quests[this.currentStage].quests.map((quest, index) => {
                    return (<li key={index} onClick={ this.passStages > this.currentStage
                        ? this.next.bind(this, index) 
                        : index <= this.passQuests 
                            ?  this.next.bind(this, index) 
                            : null}
                        className={index <= this.passQuests 
                            || this.currentStage < this.passStages
                            ? "questlist" 
                            : "questlist inactive"}>{quest.title}<span 
                            className="quest-timer">{this.getRecord(this.currentStage, index)}</span></li>)
                })
            )
        }   else if (this.step == 2) {
            return (
                
                <li className="questlist2">{quests[this.currentStage].quests[this.currentQuest].text}</li>
            )
        }
    }

    render(){
        this.passStages = this.props.passStages;
        this.passQuests = this.props.passQuests;
        this.currentStage = this.props.currentStage;
        this.currentQuest = this.props.currentQuest;
        this.step = this.props.step
        return (
            <ul>
                {this.step != 0 
                ? <button onClick={this.back}>НАЗАД</button>
                : null }
                {this.step == 1 
                    ? <div className="listheader dashed"><p>{quests[this.currentStage].title}</p></div>
                    : this.step == 2 
                        ? <div className="listheader dashed"><p>{quests[this.currentStage].quests[this.currentQuest].title}</p></div>
                        : null}
                {this.generateList()}
            </ul>
        )
    }
}

const mapStateToProps = store => {
    return {
        passStages: store.passStages,
        passQuests: store.passQuests,
        currentStage: store.currentStage,
        currentQuest: store.currentQuest,
        step: store.step,
        clear: store.clear,
        records: store.records
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectStage: index => dispatch(selectStage(index)),
        selectQuest: index => dispatch(selectQuest(index)),
        nextStep: () => dispatch(nextStep()),
        prevStep: () => dispatch(prevStep()),
        resetCode: () => dispatch(resetCode()),
        writeCode: (can) => dispatch(writeCode(can)),
        changeShowPopup: (can) => dispatch(changeShowPopup(can))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tasklist);