import React from 'react';

const VanDarkholme = require("../../img/VanDarkholme.jpg");

export const achievementsList = [
    {id: 0, name: "Brave hero", descriptions: "Pass 3 quests", reward: "nope", image: VanDarkholme},
    {id: 1, name: "Пофлексить 10 раз", descriptions: "Пожилой флекс х 1", reward: "horse power", image: VanDarkholme},
    {id: 2, name: "", descriptions: "", reward: "", image: VanDarkholme},
    {id: 3, name: "", descriptions: "", reward: "", image: VanDarkholme},
    {id: 4, name: "", descriptions: "", reward: "", image: VanDarkholme},
    {id: 5, name: "", descriptions: "", reward: "", image: VanDarkholme},
    {id: 6, name: "", descriptions: "", reward: "", image: VanDarkholme},
    {id: 7, name: "", descriptions: "", reward: "", image: VanDarkholme},
    {id: 8, name: "", descriptions: "", reward: "", image: VanDarkholme},
    {id: 9, name: "", descriptions: "", reward: "", image: VanDarkholme},
    {id: 10, name: "", descriptions: "", reward: "", image: VanDarkholme},
    {id: 11, name: "", descriptions: "", reward: "", image: VanDarkholme},

];


export const updateAchievements = (id, value) => {
    let achievements = JSON.parse(localStorage['achievements']);

    ////LEVELS PASSING////
    //PASS 3 QUESTS ACHIEVEMENT
    if (achievements[0].status === 0 && ((localStorage['passStages'] === 0 && localStorage['passQuests'] >= 3) || (localStorage['passStages'] > 0))) {
        achievements[0].status = 1;
        console.log("Achievement unlocked! You have pass 3 quests");
    }
    //PASS 1st STAGE
    if (achievements[1].status === 0 && localStorage['passStages'] >= 1) {
        achievements[1].status = 1;
        console.log("Achievement unlocked! You have pass 1st stage");
    }
    //PASS 3 STAGES
    if (achievements[2].status === 0 && localStorage['passStages'] >= 3) {
        achievements[2].status = 1;
        console.log("Achievement unlocked! You have pass 3 stages");
    }

    ////CHEAT ACHIEVEMENTS////
    //MONEY CHEAT USING 1st TIME
    if (achievements[3].status === 2) {
        achievements[3].status = 1;
        console.log("Achievement unlocked! You are f*cking cheater! (USED MONEY CHEAT)");
    }
    //QUEST UNLOCK CHEAT
    if (id === 4 && achievements[4].status === 0) {
        achievements[4].time += 1;
        if (achievements[4].time === 1) {
            achievements[4].status = 1;
            console.log("Achievement unlocked! Dude, it`s not right! (USED QUEST UNLOCK CHEAT 1st time)");
        }
        if (achievements[4].time === 10) {
            console.log("Achievement unlocked! You`ve just ruined the game! (USED QUEST UNLOCK CHEAT 10 times)");
        }
    }
    //MONEY CHEAT 1M money ADDED
    /*if (achievements[5].status === 2 && //added 1000000 money?) {
        achievements[5].status = 1;
        console.log("Achievement unlocked! BBBILIONEER! You cheated 1000000 money");
    }*/

    localStorage['achievements'] = JSON.stringify(achievements);
    console.log("ACHIEVEMENTS UPDATED!");
};


export const getAchievementsList = () => {
    return achievementsList.map((current) => {return getAchievementJSX(current)});

};


const getAchievementJSX = (achievement) => {
    return (
    <div className="achievement-body">
        <div className="achievement-picture"><img alt="avatar" src={achievement.image}/></div>
        <div className="achievement-text">
            <div className="achievement-title">{achievement.name}</div>
            <div className="achievement-description">{achievement.descriptions}</div>
        </div>
        <div className="achievement-button-wrapper"><button>Забрать награду</button></div>
    </div>
    );
};