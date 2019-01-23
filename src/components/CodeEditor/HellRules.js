import React, { Component } from 'react';
import {notes} from '../../plot/ruls_1';
import Zurnal from './Zurnal/Zurnal'
class HellRules extends Component {

    constructor() {
        super();
        this.state = {
            showTutorial: false,
            indexOfStage: 0,
            indexOfTutorial: 0
        };
    }
    openTutorial = (indexOfStage, indexOfTutorial)=> {
        this.setState({
            showTutorial: !this.state.showTutorial,
            indexOfStage: indexOfStage,
            indexOfTutorial: indexOfTutorial 
        })
    }

    render() {
        return (
            
            this.state.showTutorial
            ? <Zurnal closeTutorial={this.openTutorial} indexOfStage={this.state.indexOfStage} indexOfTutorial={this.state.indexOfTutorial}/>
            : 
            <div className="hell-rules">
            <div className="rules-wrapper ">
                {notes.map((stage, indexOfStage) => {
                    return stage.map((el, indexOfTutorial) => {
                        return (
                        <div key={indexOfTutorial} onClick={this.openTutorial.bind(this, indexOfStage, indexOfTutorial)}
                            className="el_rules">
                            <h1>{el.title}</h1>
                            <hr></hr>
                            {el.text.map((el2, index) => {
                                return <h3 key={index}>{el2.title}</h3>
                            })}
                        </div>
                        )
                    })
                })}
            </div>
            </div>
            
        );
    }
}
export default HellRules;
