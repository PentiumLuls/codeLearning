const VanDarkholme = require("../../../img/avatars/VanDarkholme.jpg");
const trophyCup = require("../../../img/achievements/cupTrophy_1.png");
const goldMedal = require("../../../img/achievements/goldMedal_1.png");
const ruby = require("../../../img/achievements/ruby_1.png");
const manuscript1 = require("../../../img/achievements/manuscript_1.png");
const crown = require("../../../img/achievements/crown_1.png");
const moneyBag = require("../../../img/achievements/moneyBag_1.png");
const manuscript2 = require("../../../img/achievements/manuscript_2.png");
const apple = require("../../../img/achievements/apple_1.png");
const energy = require("../../../img/achievements/energy_1.png");
const heart = require("../../../img/achievements/heart_1.png");
const bluePotion = require("../../../img/achievements/bluePotion_1.png");
const sword = require("../../../img/achievements/sword_1.png");
const openedBook = require("../../../img/achievements/openedBook_1.png");

export const achievementsList = [
    {
        id: 0,
        name: "Beginning of your sorter career",
        descriptions: "Pass 2 quests in first chapter",
        rewardText: "nope",
        moneyReward: 10,
        image: manuscript1,
        status: -1
    },
    {
        id: 1,
        name: "It`s only just began",
        descriptions: "Pass 1st chapter",
        rewardText: "fumes x2",
        moneyReward: 20,
        image: goldMedal,
        status: -1
    },
    {
        id: 2,
        name: "Failed wedding",
        descriptions: "Pass 3 chapters",
        rewardText: "reward",
        moneyReward: 50,
        image: manuscript2,
        status: -1
    },
    {
        id: 3,
        name: "F*cking cheater",
        descriptions: "Use money cheat 1 time",
        rewardText: "reward",
        moneyReward: -10,
        image: moneyBag,
        status: -1
    },
    {
        id: 4,
        name: "Dude, it`s not right!",
        descriptions: "Use quest unlock cheat 1st time",
        rewardText: "reward",
        moneyReward: 0,
        image: trophyCup,
        status: -1
    },
    {
        id: 5,
        name: "Grand Game Breaker",
        descriptions: "Use quest unlock cheat 10 times",
        rewardText: "horse power",
        moneyReward: -9999999,
        image: ruby,
        status: -1
    },
    {
        id: 6,
        name: "Please, take my money",
        descriptions: "Cheat less then -1000 money",
        rewardText: "dimon",
        moneyReward: 1,
        image: crown,
        status: -1
    },
    {
        id: 7,
        name: "The great Unknown, self-proclaimed master",
        descriptions: "Earn 100 money",
        rewardText: "-9999",
        moneyReward: 10,
        image: bluePotion,
        status: -1
    },
    {
        id: 8,
        name: "HZ 2",
        descriptions: "Spend 300 money",
        rewardText: "rewarddd",
        moneyReward: 30,
        image: sword,
        status: -1
    },
    {
        id: 9,
        name: "Пофлексить 10 раз",
        descriptions: "Пожилой флекс х 1",
        rewardText: "reward",
        moneyReward: 0,
        image: openedBook,
        status: -1
    },
    {
        id: 10,
        name: "Пофлексить 10 раз",
        descriptions: "Пожилой флекс х 1",
        rewardText: "reward",
        moneyReward: 0,
        image: energy,
        status: -1
    },
    {
        id: 11,
        name: "Пофлексить 10 раз",
        descriptions: "Пожилой флекс х 1",
        rewardText: "tupo flex",
        moneyReward: 9999,
        image: heart,
        status: -1
    },

];