import React, { Component } from 'react';
import {notes} from '../../plot/ruls_1';
class HellRules extends Component {

    render() {
        return (
            <div className="hell-rules">
            <div className="rules-wrapper ">
                {notes.map((stage) => {
                    return stage.map((el, index) => {
                        return (
                        <div key={index} className="el_rules">
                            <h3>{el.title}</h3>
                                {el.text.map((el2, index) => {
                                    console.log(el2.title)
                                    return <p key={index}>{el2.title}</p>
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
