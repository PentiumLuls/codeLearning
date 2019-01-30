import React, { Component } from 'react';
import {notes} from '../../plot/ruls_1';
import Zurnal from './Zurnal/Zurnal'
class HellRules extends Component {

    constructor() {
        super();
        this.state = {
            step: 0,
            indexOfStage: 0,
            indexOfTutorial: 0
        };
    }
    nextStep = (indexOfStage, indexOfTutorial) => {
        this.setState({
            step: this.state.step + 1,
            indexOfStage: indexOfStage,
            indexOfTutorial: indexOfTutorial 
        })
    }

    back = () => {
        this.setState({
            step: this.state.step - 1
        })
    }

    render() {
        return (
            <div>

                {this.state.step === 2
                ? 
                <Zurnal
                    back={this.back}
                    indexOfStage={this.state.indexOfStage} 
                    indexOfTutorial={this.state.indexOfTutorial}/>
                : 
                <div className="hell-rules">
                    {this.state.step !== 0 
                    ? <button onClick={this.back}>НАЗАД</button>
                    : null}
                    <div className="rules-wrapper ">
                        {this.state.step === 1 
                        ? 
                                notes[this.state.indexOfStage].map((el, indexOfTutorial) => {
                                    if (JSON.parse(localStorage.whiteList)[this.state.indexOfStage][indexOfTutorial] === null){
                                    return (
                                    <div key={indexOfTutorial} onClick={this.nextStep.bind(this, this.state.indexOfStage, indexOfTutorial)}
                                        className="el_rules">
                                        <h3>{el.title}</h3>
                                        {el.text.map((el2, index) => {
                                            return <p key={index}>{el2.title}</p>
                                        })}
                                    </div>
                                    )}
                            })
                        
                        : notes.map((stage, indexOfStage) => {
                            if (indexOfStage <= this.props.passStages)
                                return (
                                    <div key={indexOfStage} onClick={this.nextStep.bind(this, indexOfStage, null)}
                                        className="el_rules">
                                        <h3>{`Глава ${indexOfStage + 1}`}</h3>
                                        {stage.map((el2, index) => {
                                            if (JSON.parse(localStorage.whiteList)[indexOfStage][index] === null) {
                                            return <p key={index}>{el2.title}</p>}
                                        })}
                                    </div>
                                    )
                            })}
                    </div>
                </div>
                
            }</div>);
    }
}
export default HellRules;
