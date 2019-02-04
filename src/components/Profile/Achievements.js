import React from 'react'
import {getAchievementsList} from "./achievementsHandler";

export default () => {
    return (
        <div className="profile-achievements">
            {getAchievementsList()}
        </div>
    )
}