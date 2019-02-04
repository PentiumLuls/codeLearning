import React from 'react';
import {achievementsList} from "./achievementsList";
import {addMoney, spendMoney} from "../../../store/actions/moneyActions";
import {connect} from "react-redux";
import CryptoJS from "crypto-js";

export const updateAchievements = (id, value) => {
    let achievements = JSON.parse(localStorage['achievements']);

    ////LEVELS PASSING////
    //PASS 3 QUESTS ACHIEVEMENT
    if (achievements[0].status === 0 && ((localStorage['passStages'] === 0 && localStorage['passQuests'] >= 3) || (localStorage['passStages'] > 0))) {
        achievements[0].status = 1;
    }
    //PASS 1st STAGE
    if (achievements[1].status === 0 && localStorage['passStages'] >= 1) {
        achievements[1].status = 1;
    }
    //PASS 3 STAGES
    if (achievements[2].status === 0 && localStorage['passStages'] >= 3) {
        achievements[2].status = 1;
    }

    ////CHEAT ACHIEVEMENTS////
    //MONEY CHEAT USING 1st TIME
    if (achievements[3].status === 2) {
        achievements[3].status = 1;
    }
    //QUEST UNLOCK CHEAT 1st TIME
    if (id === 4 && achievements[4].status === 0) {
        achievements[4].status = 1;
    }
    //QUEST UNLOCK CHEAT 10 TIMES
    if (id === 4 && achievements[5].status === 0) {
        achievements[5].time += 1;
        if (achievements[5].time >= 10) {
            achievements[5].status = 1;
        }
    }
    //MONEY CHEAT -1K money ADDED
    if (achievements[6].status === 0 && achievements[6].payload <= -1000) {
        achievements[6].status = 1;
    }

    ////??????????////
    //Earn 100 money
    if (achievements[7].status === 0 && achievements[7].earned >= 100) {
        achievements[7].status = 1;
    }
    //Spend 300 money
    if (achievements[8].status === 0 && achievements[8].spend >= 300) {
        achievements[8].status = 1;
    }

    localStorage['achievements'] = JSON.stringify(achievements);
};

const updateList = () => {
    let achievements = JSON.parse(localStorage['achievements']);
    achievementsList.forEach((current) => {
        current.status = achievements[current.id].status
    });
};


export const getAchievementsList = () => {
    updateList();
    return achievementsList.map((current, key) => {
        return getAchievementJSX(current, key)
    });
};


const getAchievementJSX = (achievement, key) => {
    return (
        <div className={achievement.status === 1 || achievement.status === -1 ? "achievement-body" : "achievement-body-inactive"} key={key}>
            <div className="achievement-picture"><img alt="avatar" src={achievement.image}/></div>
            <div className="achievement-text">
                <div className="achievement-title">{achievement.name}</div>
                <div className="achievement-description">{achievement.descriptions}</div>
            </div>
            <div className="achievement-button-wrapper">
                <button
                    className={achievement.status === 1 ? null : "achievement-button-disabled"}
                    onClick={achievement.status === 1 ? handleRewardClick(key) : null}>
                    {achievement.rewardText}
                </button>
            </div>
        </div>
    );
};

const handleRewardClick = (id) => {
    return function(e) {
        console.log("GIVE MY REWARD!  button: " + id + "  reward: " + achievementsList[id].moneyReward);
        //TODO MONEY ADDING

        //BUTTON DISABLING
        let achievements = JSON.parse(localStorage['achievements']);
        achievements[id].status = -1;
        localStorage['achievements'] = JSON.stringify(achievements);
        updateList();
    }
};
