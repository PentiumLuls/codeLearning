import React from 'react';
import {achievementsList} from "./achievementsList";
import * as toastr from "toastr";

//let unlockAvatar;
let addMoney;
let timeInGame = {};

window.unlockAllAchievements = () => {
    let achievements = JSON.parse(localStorage['achievements']);
    achievements.forEach((cur) => {
        cur.status = 1
    });
    localStorage['achievements'] = JSON.stringify(achievements);
};

let buttonsState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export const updateAchievements = (id, value) => {
    let achievements = JSON.parse(localStorage['achievements']);
    let stats = JSON.parse(localStorage['stats']);

    ////LEVELS PASSING////
    //PASS 2 QUESTS ACHIEVEMENT
    if (achievements[0].status === -1 && ((localStorage['passStages'] == 0 && localStorage['passQuests'] >= 2)
        || (localStorage['passStages'] > 0))) {
        unlockAchievement(0, achievements);
    }
    //PASS 1st STAGE
    if (achievements[1].status === -1 && localStorage['passStages'] >= 1) {
        unlockAchievement(1, achievements);
    }
    //PASS 3 STAGES
    if (achievements[2].status === -1 && localStorage['passStages'] >= 3) {
        unlockAchievement(2, achievements);
    }

    ////CHEAT ACHIEVEMENTS////
    //MONEY CHEAT USING 1st TIME
    if (id === 3 && achievements[3].status === -1) {
        unlockAchievement(3, achievements);
    }
    //QUEST UNLOCK CHEAT 1st TIME
    if (id === 4 && achievements[4].status === -1) {
        unlockAchievement(4, achievements);
    }
    //QUEST UNLOCK CHEAT 10 TIMES
    if (id === 4 && achievements[5].status === -1) {
        achievements[5].time += 1;
        if (achievements[5].time >= 10) {
            unlockAchievement(5, achievements);
        }
    }
    //MONEY CHEAT -1K money ADDED
    if (achievements[6].status === -1 && achievements[6].payload <= -100) {
        unlockAchievement(6, achievements);
    }

    ////??????????////
    //Earn 100 money
    if (achievements[7].status === -1 && achievements[7].earned >= 100) {
        unlockAchievement(7, achievements);
    }
    //Spend 300 money
    if (achievements[8].status === -1 && achievements[8].spend >= 300) {
        unlockAchievement(8, achievements);
    }
    //WRITE 500 SYMBOLS
    if (achievements[9].status === -1 && stats.symbols >= 500) {
        unlockAchievement(9, achievements);
    }
    //WRITE 10000 SYMBOLS
    if (achievements[10].status === -1 && stats.symbols >= 5000) {
        unlockAchievement(10, achievements);
    }
    //CLICK '*' button x10
    if (id === 11 && achievements[11].status === -1) {
        achievements[11].times += 1;
        if (achievements[11].times >= 10) {
            unlockAchievement(11, achievements);
        }
    }
    if (achievements[12].status === -1 && stats.unsuccessfulRuns >= 30) {
        unlockAchievement(12, achievements);
    }
    if (achievements[13].status === -1) {
        if (timeInGame.hours >= 3) {
            unlockAchievement(13, achievements);
        }
    }
    if (id === 14 && achievements[14].status === -1 && localStorage["currentQuest"] == 0 && localStorage["currentStage"] == 0) {
        unlockAchievement(14, achievements);
    }

    localStorage['achievements'] = JSON.stringify(achievements);
};

export const getAchievementsList = (addMoney1, timeInGame1) => {
    addMoney = addMoney1;
    timeInGame = {...timeInGame1};
    updateList();
    return achievementsList
        .sort(compareTwoAchieveByStatus)
        .map((current, key) => {return getAchievementJSX(current, key)});
};

///////////////////////////////////////////////////////////////////////

const unlockAchievement = (id, achievements) => {
    const idInList = achievementsList.map((cur) => {return cur.id}).indexOf(id);
    const descriptions = achievementsList[idInList].descriptions;
    toastr.success(descriptions);
    achievements[id].status = 1;
};

const updateList = () => {
    let achievements = JSON.parse(localStorage['achievements']);
    achievementsList.forEach((current) => {
        current.status = achievements[current.id].status
    });
};

const compareTwoAchieveByStatus = (a, b) => {
    return b.status - a.status;
};

const getAchievementJSX = (achievement, key) => {
    return (
        <div
            className={achievement.status === 0 || achievement.status === 1 ? "achievement-body" : "achievement-body-inactive"}
            key={key}>
            <div className="achievement-picture"><img alt="avatar" src={achievement.image}/></div>
            <div className="achievement-text">
                <div
                    className="achievement-title">{achievement.status === -1 && achievement.hide === true ? hideAchievementText(achievement.name) : achievement.name}</div>
                <div
                    className="achievement-description">{achievement.status === -1 && achievement.hide === true ? hideAchievementText(achievement.descriptions) : achievement.descriptions}</div>
            </div>
            <div className="achievement-button-wrapper">
                <button
                    className={achievement.status === 1 ? null : "achievement-button-disabled"}
                    onClick={achievement.status === 1 ? handleRewardClick(achievement.id, achievement.moneyReward) : null}>
                    {achievement.rewardText}
                </button>
            </div>
        </div>
    );
};

const hideAchievementText = (str) => {
    //CHANGE STR TO '?' IGNORING ' '
    let result = "";
    for (var i = 0; i < str.length; i++) {
        str[i] == " " ? result += " " : result += "?";
    }
    return result;
};

const handleRewardClick = (id, reward) => {
    return function (e) {
        if (buttonsState[id] === 0) {
            if (reward != 0) addMoney(reward);
            buttonsState[id] = 1;

            if (id === 2) {
                toastr.success("Аватар Худшая девочка получен");
                window.unlockAvatar("zeroTwo");
            }
            if (id === 4) {
                toastr.success("Аватар Хорошая девочка получен");
                window.unlockAvatar("futaba");
            }
            if (id === 10) {
                toastr.success("Аватар Сплинтер получен");
                window.unlockAvatar("splinter");
            }
            if (id === 11) {
                toastr.success("Аватар Рикардо Милосов получен");
                window.unlockAvatar("ricardo");
            }
            if (id === 12) {
                toastr.success("Аватар Pickachu получен");
                window.unlockAvatar("pikachu");
            }
            if (id === 14) {
                toastr.success("Аватар Тысячник получен");
                window.unlockAvatar("denis");
            }
        }

        //ACHIEVEMENT DISABLING
        let achievements = JSON.parse(localStorage['achievements']);
        achievements[id].status = 0;
        localStorage['achievements'] = JSON.stringify(achievements);
        updateList();
    }
};