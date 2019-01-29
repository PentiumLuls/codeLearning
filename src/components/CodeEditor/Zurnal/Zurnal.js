import React from 'react';
import {notes} from '../../../plot/ruls_1';


export default (props) => {
    return (
        <div className="hell-rules">
                <button onClick={props.back}>НАЗАД</button>
                    
                <h1 className="hell-heading">{notes[props.indexOfStage][props.indexOfTutorial].title}</h1>
                <div className="rules-wrapper">
                    {notes[props.indexOfStage][props.indexOfTutorial].text.map((el, index) => {
                        return (
                            <div key={index}><h3>{el.title}</h3>{el.text}</div>
                        )
                    })}
                </div>
            </div>
    )
}