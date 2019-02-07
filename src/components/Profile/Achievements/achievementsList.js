const VanDarkholme = require("../../img/avatars/VanDarkholme.jpg");
const trophyCup = require("../../../img/achievements/cupTrophy_1.png");
const goldMedal = require("../../../img/achievements/goldMedal_1.png");
const ruby = require("../../../img/achievements/ruby_1.png");
const manuscript1 = require("../../../img/achievements/manuscript_1.png");
const crown = require("../../../img/achievements/crown_1.png");
const moneyBag1 = require("../../../img/achievements/moneyBag_1.png");
const moneyBag2 = require("../../../img/achievements/moneyBag_2.png");
const manuscript2 = require("../../../img/achievements/manuscript_2.png");
const apple = require("../../../img/achievements/apple_1.png");
const energy = require("../../../img/achievements/energy_1.png");
const heart = require("../../../img/achievements/heart_1.png");
const bluePotion = require("../../../img/achievements/bluePotion_1.png");
const sword = require("../../../img/achievements/sword_1.png");
const openedBook = require("../../../img/achievements/openedBook_1.png");
const bootWithWings = require("../../../img/achievements/boot_1.png");
const lamp = require("../../../img/achievements/lamp_1.png");
const exclamation = require("../../../img/achievements/exclamation_1.png");
const weddingCake = require("../../../img/achievements/weddingCake_1.png");
const gameBreaker = require("../../../img/achievements/gameBreaker_1.png");
const emptyWallet = require("../../../img/achievements/emptyWallet_1.png");
const greatPoet = require("../../../img/achievements/greatPoet_1.png");
const ricardoFlex = require("../../../img/achievements/ricardoFlex_1.png");

export const achievementsList = [
    {
        id: 0,
        name: "Beginning of your sorter career",
        descriptions: "Pass 2 quests in first chapter",
        rewardText: "nope",
        moneyReward: 7,
        image: manuscript1,
        status: -1,
        hide: false
    },
    {
        id: 1,
        name: "It`s only just began",
        descriptions: "Pass 1st chapter",
        rewardText: "fumes x2",
        moneyReward: 10,
        image: goldMedal,
        status: -1,
        hide: false
    },
    {
        id: 2,
        name: "Failed wedding",
        descriptions: "Pass 3 chapters",
        rewardText: "reward",
        moneyReward: 30,
        image: weddingCake,
        status: -1,
        hide: false
    },
    {
        id: 3,
        name: "No investment",
        descriptions: "Use money cheat",
        rewardText: "reward",
        moneyReward: -10,
        image: moneyBag1,
        status: -1,
        hide: true
    },
    {
        id: 4,
        name: "Dude, it`s not right!",
        descriptions: "Use quest unlock cheat",
        rewardText: "reward",
        moneyReward: 0,
        image: exclamation,
        status: -1,
        hide: true
    },
    {
        id: 5,
        name: "Grand Game Breaker",
        descriptions: "Use quest unlock cheat 10 times",
        rewardText: "horse power",
        moneyReward: -999,
        image: gameBreaker,
        status: -1,
        hide: true
    },
    {
        id: 6,
        name: "Please, take my money",
        descriptions: "Cheat less then -1000 money",
        rewardText: "dimon",
        moneyReward: 1,
        image: emptyWallet,
        status: -1,
        hide: true
    },
    {
        id: 7,
        name: "Bag full of money",
        descriptions: "Earn 100 money",
        rewardText: "-9999",
        moneyReward: 5,
        image: moneyBag2,
        status: -1,
        hide: false
    },
    {
        id: 8,
        name: "Generous person",
        descriptions: "Spend 300 money",
        rewardText: "rewarddd",
        moneyReward: 15,
        image: trophyCup,
        status: -1,
        hide: false
    },
    {
        id: 9,
        name: "Great poet",
        descriptions: "Write 500 symbols",
        rewardText: "reward",
        moneyReward: 20,
        image: greatPoet,
        status: -1,
        hide: false
    },
    {
        id: 10,
        name: "The great Unknown, self-proclaimed master",
        descriptions: "Write 10000 symbols",
        rewardText: "reward",
        moneyReward: 50,
        image: crown,
        status: -1,
        hide: false
    },
    {
        id: 11,
        name: "Пожилой флекс х 10",
        descriptions: "Пофлексить кнопкой '*' 10 раз",
        rewardText: "tupo flex",
        moneyReward: 0,
        image: ricardoFlex,
        status: -1,
        hide: false
    },
    {
        id: 12,
        name: "Loser",
        descriptions: "Unsuccessful code runs x30",
        rewardText: "loh",
        moneyReward: 5,
        image: trophyCup,
        status: -1,
        hide: false
    },
    {
        id: 13,
        name: "HZ",
        descriptions: "Play this game for the 3 hours",
        rewardText: "Reward?!",
        moneyReward: 7,
        image: trophyCup,
        status: -1,
        hide: false
    },
    {
        id: 14,
        name: "Якось",
        descriptions: "Get hint in first quest",
        rewardText: "Avatar-'Тысячник'",
        moneyReward: 7,
        image: goldMedal,
        status: -1,
        hide: false
    },
];

//"The great Unknown, self-proclaimed master"