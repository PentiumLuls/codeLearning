import React, {Component} from 'react'
import {plot} from '../../plot/quests'

export default class Tasklist2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 2,
            stage: 0,
            quest: 1
        }
    }

    back = () => {
        let newStep = --this.state.step;

        this.setState({
            step: newStep
        })
    }

    next = (index) => {
        if (this.state.step == 0) {
            let newStep = ++this.state.step;
            let newStage = index;

            this.setState({
                step: newStep,
                stage: newStage
            })
        } else if (this.state.step == 1) {
            let newStep = ++this.state.step;
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
                plot.map((stage, index) => {
                    return (<li key={index} onClick={this.next.bind(this, index)} className="listheader dashed">{stage.title}</li>)
                })
            )
        } else if (this.state.step == 1) {
            return (
                plot[this.state.stage].quests.map((quest, index) => {
                    return (<li key={index} onClick={this.next.bind(this, index)} className="questlist">{quest.title}</li>)
                })
            )
        }   else if (this.state.step == 2) {
            return (
                <li onClick={this.props.writeQuest.bind(this, this.state.stage, this.state.quest)}
                 className="questlist">{plot[this.state.stage].quests[this.state.quest].text}</li>
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
                    ? <li className="listheader dashed">{plot[this.state.stage].title}</li>
                    : this.state.step == 2 
                        ? <li className="listheader dashed">{plot[this.state.stage].quests[this.state.quest].title}</li> 
                        : null}
                {this.generateList()}
            </ul>
        )
    }
}