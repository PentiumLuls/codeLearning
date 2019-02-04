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