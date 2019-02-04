import React from 'react'
import {getAchievementJSX} from "./achievementsHandler";

export default () => {
    return (
        <div className="profile-achievements">
            {getAchievementJSX()}
            {getAchievementJSX()}
            {getAchievementJSX()}
            {getAchievementJSX()}
            {getAchievementJSX()}
            {getAchievementJSX()}
            {getAchievementJSX()}
            {getAchievementJSX()}
        </div>
    )
}