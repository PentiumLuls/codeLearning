import React from 'react'
import {getAchievementsList} from "./achievementsHandler";

export default (props) => {
    return (
        <div className="profile-achievements">
            {getAchievementsList(props.addMoney, props.timeInGame)}
        </div>
    )
}