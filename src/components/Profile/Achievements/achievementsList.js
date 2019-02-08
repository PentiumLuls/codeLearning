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
        name: "Начало твоей карьеры сортировщика",
        descriptions: "Пройди 2 квеста в первой главе",
        rewardText: "7 сыра",
        moneyReward: 7,
        image: manuscript1,
        status: -1,
        hide: false
    },
    {
        id: 1,
        name: "Это только начало",
        descriptions: "Пройди первую главу",
        rewardText: "10 сыра",
        moneyReward: 10,
        image: goldMedal,
        status: -1,
        hide: false
    },
    {
        id: 2,
        name: "Красная свадьба",
        descriptions: "Пройди 3 главы",
        rewardText: "Аватар Худшая девочка",
        moneyReward: 0,
        image: weddingCake,
        status: -1,
        hide: false
    },
    {
        id: 3,
        name: "Никаких инвестиций",
        descriptions: "Используй чит на получение денег",
        rewardText: "reward",
        moneyReward: -10,
        image: moneyBag1,
        status: -1,
        hide: true
    },
    {
        id: 4,
        name: "Grand Game Breaker",
        descriptions: "Используй чит на прохождение уровня",
        rewardText: "Аватар Лучшая девочка",
        moneyReward: 0,
        image: exclamation,
        status: -1,
        hide: true
    },
    {
        //TODO REMOVE
        id: 5,
        name: "Achievement to remove",
        descriptions: "Use quest unlock cheat 10 times",
        rewardText: "reward",
        moneyReward: -999,
        image: gameBreaker,
        status: -1,
        hide: true
    },
    {
        id: 6,
        name: "Пожалуйста, вот мои деньги",
        descriptions: "Начитери -100 сыра",
        rewardText: "reward",
        moneyReward: 1,
        image: emptyWallet,
        status: -1,
        hide: true
    },
    {
        id: 7,
        name: "Полно денег",
        descriptions: "Получи 100 сыра",
        rewardText: "5 сыра",
        moneyReward: 5,
        image: moneyBag2,
        status: -1,
        hide: false
    },
    {
        id: 8,
        name: "Щедрый",
        descriptions: "Потрать 300 сыра",
        rewardText: "15 сыра",
        moneyReward: 15,
        image: trophyCup,
        status: -1,
        hide: false
    },
    {
        id: 9,
        name: "Великий поет",
        descriptions: "Напиши 500 символов",
        rewardText: "20 сыра",
        moneyReward: 20,
        image: greatPoet,
        status: -1,
        hide: false
    },
    {
        id: 10,
        name: "Великий никто, самопровозглашенный мастер",
        descriptions: "Напиши 5000 символов",
        rewardText: "Аватар Сплинтер + 50 сыра",
        moneyReward: 50,
        image: crown,
        status: -1,
        hide: false
    },
    {
        id: 11,
        name: "Пожилой флекс х 10",
        descriptions: "Пофлексить кнопкой '*' 10 раз",
        rewardText: "Аватар Рикардо Милосов",
        moneyReward: 0,
        image: ricardoFlex,
        status: -1,
        hide: false
    },
    {
        id: 12,
        name: "Аутсайдер",
        descriptions: "Неудачных запусков кода x30",
        rewardText: "Аватар Picachu",
        moneyReward: 0,
        image: trophyCup,
        status: -1,
        hide: false
    },
    {
        id: 13,
        name: "Наш игрок",
        descriptions: "Оставайся в игре на протяжении 3 часов",
        rewardText: "7 сыра",
        moneyReward: 7,
        image: trophyCup,
        status: -1,
        hide: false
    },
    {
        id: 14,
        name: "Сильно",
        descriptions: "Попроси подсказку в первом квесте",
        rewardText: "Аватар Тысячник",
        moneyReward: 0,
        image: goldMedal,
        status: -1,
        hide: false
    },
];

//"The great Unknown, self-proclaimed master"