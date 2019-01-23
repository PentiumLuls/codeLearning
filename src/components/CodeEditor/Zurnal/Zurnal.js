import React from 'react';
import {notes} from '../../../plot/ruls_1';


export default (props) => {
    return (
        <div className="hell-rules">
                <button onClick={props.closeTutorial}>Назад</button>
                <h1 className="hell-heading">{notes[props.indexOfStage][props.indexOfTutorial].title}</h1>
                <div className="rules-wrapper">
                    {notes[props.indexOfStage][props.indexOfTutorial].text.map((el) => {
                        return (
                            <div><h3>{el.title}</h3>{el.text}</div>
                        )
                    })}
                </div>
            </div>
    )
}