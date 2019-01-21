import React, {Component} from 'react'
import {quests} from '../../plot/quests'

export default class Tasklist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            stage: 0,
            quest: 0
        }
    }

    back = () => {
        let newStep = this.state.step - 1;
        this.setState({
            step: newStep
        })
        if (this.state.step === 2) {
            this.props.notUpdateEditor();
        }
    }

    next = (index) => {

        if (this.state.step == 0) {
            let newStep = this.state.step + 1;
            let newStage = index;

            this.setState({
                step: newStep,
                stage: newStage
            })
        } else if (this.state.step == 1) {
            this.props.writeQuest(this.state.stage, this.state.quest)
            let newStep = this.state.step + 1;
            let newQuest = index;

            this.setState({
                step: newStep,
                quest: newQuest
            })
        }
    }



    generateList = () => {
        if (this.state.step == 0) {
            return (
                quests.map((stage, index) => {
                    return (<li key={index} 
                        onClick={index <= this.props.passStages ? this.next.bind(this, index) : null}
                         className={index <= this.props.passStages ? "questlist" : "questlist inactive"}>{stage.title}</li>)
                })
            )
        } else if (this.state.step == 1) {
            return (
                quests[this.state.stage].quests.map((quest, index) => {
                    return (<li key={index} onClick={ this.props.passStages > this.state.stage
                        ? this.next.bind(this, index) 
                        : index <= this.props.passQuests 
                            ?  this.next.bind(this, index) 
                            : null}
                        className={index <= this.props.passQuests 
                            ? "questlist" 
                            : "questlist inactive"}>{quest.title}</li>)
                })
            )
        }   else if (this.state.step == 2) {
            return (
                <li onClick={this.props.writeQuest.bind(this, this.state.stage, this.state.quest)}
                 className="questlist">{quests[this.state.stage].quests[this.state.quest].text}</li>
            )
        }
    }

    render(){
        return (
            <ul>
                {this.state.step != 0 
                ? <button onClick={this.back}>Назад</button>
                : null }
                {this.state.step == 1 
                    ? <div className="listheader dashed"><p>{quests[this.state.stage].title}</p></div>
                    : this.state.step == 2 
                        ? <div className="listheader dashed"><p>{quests[this.state.stage].quests[this.state.quest].title}</p></div>
                        : null}
                {this.generateList()}
            </ul>
        )
    }
}