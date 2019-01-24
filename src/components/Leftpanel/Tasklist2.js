import React, {Component} from 'react'
import {quests} from '../../plot/quests'

export default class Tasklist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 2,
            stage: localStorage.passStages,
            quest: localStorage.passQuests
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
            this.props.writeQuest(this.state.stage, index)
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
                            || this.state.stage < localStorage.passStages
                            ? "questlist" 
                            : "questlist inactive"}>{quest.title}</li>)
                })
            )
        }   else if (this.state.step == 2) {
            return (
                
                <li onClick={this.props.writeQuest.bind(this, this.props.stage, this.props.quest)}
                 className="questlist">{quests[this.props.stage].quests[this.props.quest].text}</li>
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
                        ? <div className="listheader dashed"><p>{quests[this.props.stage].quests[this.props.quest].title}</p></div>
                        : null}
                {this.generateList()}
            </ul>
        )
    }
}