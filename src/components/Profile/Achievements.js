import React from 'react'

export default () => {
    return (
        <div className="profile-achievements">
            <div className="achievement-body">
                <div className="achievement-picture"><img alt="avatar" src={require("../../img/VanDarkholme.jpg")}/></div>
                <div className="achievement-text">
                    <div className="achievement-title">Пофлексить 10 раз</div>
                    <div className="achievement-description">Пожилой флекс х 1</div>
                </div>
                <div className="achievement-button-wrapper"><button>Забрать награду</button></div>
            </div>
            <div className="achievement-body">
                <div className="achievement-picture"><img alt="avatar" src={require("../../img/VanDarkholme.jpg")}/></div>
                <div className="achievement-text">
                    <div className="achievement-title">Пофлексить 10 раз</div>
                    <div className="achievement-description">Пожилой флекс х 1</div>
                </div>
                <div className="achievement-button-wrapper"><button>Забрать награду</button></div>
            </div>
        </div>
    )
}