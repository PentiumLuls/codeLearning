import { SELECT_QUEST, SELECT_STAGE, PASS_QUEST, NEXT_LEVEL, NEXT_STEP, PREV_STEP } from '../actions/questActions'
import { RESET_CODE, WRITE_CODE, CHANGE_SHOW_POPUP, CLEAR_TERMINAL, SHOW_ANSWER, EXPORT_RUN, EXPORT_HIDE_NEXT_CODE, EXPORT_HIDE_CHAT } from '../actions/codeActions'
import { SPEND_MONEY, ADD_MONEY} from '../actions/moneyActions'
import { TICK_TIME_IN_GAME, TICK_QUEST_TIME, INITIAL_INTERVAL, tickQuestTime } from '../actions/stats'
import {quests} from '../../plot/quests';
import CryptoJS from 'crypto-js'

if (!localStorage['passStages']) {
    localStorage['passStages'] = 0
}
if (!localStorage['passQuests']) {
    localStorage['passQuests'] = 0
}
if (!localStorage['currentStage']) {
    localStorage['currentStage'] = localStorage.passStages;
}
if (!localStorage['currentQuest']) {
    localStorage['currentQuest'] = localStorage.passQuests;
}
if (!localStorage['whiteList']) {
    localStorage['whiteList'] = JSON.stringify([[0, 1, 2, 3, 6], [0, 2, 4],[0],[0, 1], [], []]);
}
if (!localStorage['code']) {
    localStorage['code'] = quests[0].quests[0].code;
}
if (!localStorage['LH;;tabs']) {
    localStorage['LH;;tabs'] = CryptoJS.AES.encrypt('100', 'Kt0 et0 ch1tayet t0t l0h');
}
if (!localStorage['passingLevels']) {
    localStorage['passingLevels'] = JSON.stringify([[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]);
}
if (!localStorage['achievements']) {
    localStorage['achievements'] = JSON.stringify([{id: 0, status: 0}, {id: 1, status: 0}, {id: 2, status: 0},
        {id: 3, status: 0}, {id: 4, status: 0, time: 0}, {id: 5, status: 0}, {id: 6, status: 0}, {id: 7, status: 0}, {id: 8, status: 0}]);
}
if (!localStorage['timeInGame']) {
    localStorage['timeInGame'] = JSON.stringify({hours: 0, minutes: 0, seconds: 0})
}
if (!localStorage['stats']) {
    localStorage['stats'] = JSON.stringify({
        symbols: 0,
        successfulRuns: 0,
        unsuccessfulRuns: 0,
        spendMoneys: 0
    })
}
if (!localStorage['questTime']) {
    localStorage['questTime'] = JSON.stringify({hours: 0, minutes: 0, seconds: 0})
}
if (!localStorage['records']) {
    localStorage['records'] = JSON.stringify(
    [
        [
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0}
        ],
        [
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0}
        ],
        [
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0}
        ],
        [
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0}
        ],
        [
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0}
        ],
        [
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0},
            {hours: 0, minutes: 0, seconds: 0}
        ]
    ])
}


export const initialState = {
    passStages: +localStorage.passStages,
    passQuests: +localStorage.passQuests,
    currentStage: +localStorage.currentStage,
    currentQuest: +localStorage.currentQuest,
    code: localStorage.code,
    step: 2,
    writeCode: false,
    resets: 0,
    showPopup: true,
    clear: null,
    run: null,
    money: +CryptoJS.AES.decrypt(localStorage['LH;;tabs'].toString(), 'Kt0 et0 ch1tayet t0t l0h').toString(CryptoJS.enc.Utf8),
    hideNextLevel: null,
    hideChat: null,
    stats: JSON.parse(localStorage['stats']),
    timeInGame: JSON.parse(localStorage['timeInGame']),
    questTime: JSON.parse(localStorage['questTime']),
    records: JSON.parse(localStorage['records']),
    interval: null
};


export function rootReducer(state = initialState, action) {
    
    switch (action.type) {
        case SELECT_QUEST:
            state.hideNextLevel();
            localStorage.currentQuest = action.payload;
            clearInterval(state.interval)
            
            return {...state, currentQuest: action.payload, interval: createInterval()};
        
        case SELECT_STAGE:
            localStorage.currentStage = action.payload;
            return {...state, currentStage: action.payload};
        
        case PASS_QUEST:
            const passingLevels = JSON.parse(localStorage['passingLevels']);

            if (state.currentStage == state.passStages && state.currentQuest == state.passQuests) {
                localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money + 5}`, 'Kt0 et0 ch1tayet t0t l0h');

                
                clearInterval(state.interval)
                const record = JSON.parse(localStorage['records'])

                record[state.currentStage][state.currentQuest] = state.questTime[state.currentStage][state.currentQuest]

                localStorage['records'] = {...record}
                localStorage['questTime'] = {hours: 0, minutes: 0, seconds: 0}


                if (state.currentQuest > 0) {
                    passingLevels[state.currentStage][state.currentQuest - 1] = 1;
                    localStorage['passingLevels'] = JSON.stringify(passingLevels);
                } else if (state.currentStage > 0) {
                    passingLevels[state.currentStage - 1][quests[state.currentStage].quests.length - 1] = 1;
                    localStorage['passingLevels'] = JSON.stringify(passingLevels);
                }

                if (state.currentQuest == quests[state.currentStage].quests.length - 1) {

                    localStorage.passStages = state.currentStage + 1;
                    localStorage.passQuests = 0;
                    return {...state, passStages: state.currentStage + 1, passQuests: 0, money: state.money + 5, records: {...record}, questTime: {hours: 0, minutes: 0, seconds: 0}}
                } else {
                    localStorage.passQuests = state.currentQuest + 1;
                    return {...state, passQuests: state.currentQuest + 1, money: state.money + 5, records: {...record}, questTime: {hours: 0, minutes: 0, seconds: 0}}
                }
            }

            clearInterval(state.interval)
            const record = JSON.parse(localStorage['records'])

            if (state.questTime < state.record[state.currentStage][state.currentQuest]) {
                record[state.currentStage][state.currentQuest] = state.questTime
            }

            localStorage['records'] = {...record}
            localStorage['questTime'] = {hours: 0, minutes: 0, seconds: 0}
            
            if (passingLevels[state.currentStage][state.currentQuest] > 0) {
                

                passingLevels[state.currentStage][state.currentQuest] -= 1;
                localStorage['passingLevels'] = JSON.stringify(passingLevels);
                localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money + 3}`, 'Kt0 et0 ch1tayet t0t l0h');
                return {...state, money: state.money + 3, records: {...record}, questTime: {hours: 0, minutes: 0, seconds: 0}}
            }     
            
            return {...state, records: {...record}, questTime: {hours: 0, minutes: 0, seconds: 0}}
            
            

        case NEXT_LEVEL:
            clearInterval(state.interval)
            if (state.currentQuest == quests[state.currentStage].quests.length - 1) {
                localStorage.currentStage = state.currentStage + 1;
                localStorage.currentQuest = 0;
                return {...state, currentStage: state.currentStage + 1, currentQuest: 0, interval: createInterval()}
            } else {
                localStorage.currentQuest = state.currentQuest + 1;
                return {...state, currentQuest: state.currentQuest + 1, interval: createInterval()}
            }

        case RESET_CODE:
            localStorage.code = quests[state.currentStage].quests[state.currentQuest].code;
            return {...state, code: quests[state.currentStage].quests[state.currentQuest].code, resets: state.resets + 1};

        case NEXT_STEP:
            return {...state, step: state.step + 1};

        case PREV_STEP:
            return {...state, step: state.step - 1};

        case WRITE_CODE:
            return {...state, writeCode: action.payload};

        case CHANGE_SHOW_POPUP:
            return {...state, showPopup: action.payload};

        case CLEAR_TERMINAL:
            return {...state, clear: action.payload};

        case SHOW_ANSWER:
            localStorage.code = quests[state.currentStage].quests[state.currentQuest].test.answer;
            return {...state, code: quests[state.currentStage].quests[state.currentQuest].test.answer};

        case EXPORT_RUN:
            return {...state, run: action.payload};

        case EXPORT_HIDE_NEXT_CODE:
            return {...state, hideNextLevel: action.payload};

        case EXPORT_HIDE_CHAT:
            return {...state, hideChat: action.payload};

        case ADD_MONEY:
            let achievements = JSON.parse(localStorage['achievements']);
            if (achievements[3].status === 0) {
                achievements[3].status = 2;
            }
            if (achievements[5].status === 0) {
                achievements[5].status = 2;
            }
            localStorage['achievements'] = JSON.stringify(achievements);

            localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money + action.payload}`, 'Kt0 et0 ch1tayet t0t l0h');
            return {...state, money: state.money + action.payload};

        case SPEND_MONEY:
            localStorage['stats'] = JSON.stringify({...state.stats, spendMoneys: state.spendMoney + action.payload})

            localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money - action.payload}`, 'Kt0 et0 ch1tayet t0t l0h');
            return {...state, money: state.money - action.payload, spendMoneys: state.spendMoney + action.payload};


        case TICK_TIME_IN_GAME:
            const time = {...state.timeInGame}
            if(time.seconds === 59) {
                if(time.minutes === 59){
                    time.hours += 1
                    time.minutes = 0
                    time.seconds = 0
                } else {
                    time.minutes += 1
                    time.seconds = 0
                }
            } else {
                time.seconds += 1
            }
            
            localStorage['timeInGame'] = JSON.stringify(time);
            return {...state, timeInGame: time}

        case TICK_QUEST_TIME:
            const timeOfQuest = state.questTime
            console.log(timeOfQuest)
            if(timeOfQuest.seconds === 59) {
                if(timeOfQuest.minutes === 59){
                    timeOfQuest.hours += 1
                    timeOfQuest.minutes = 0
                    timeOfQuest.seconds = 0
                } else {
                    timeOfQuest.minutes += 1
                    timeOfQuest.seconds = 0
                }
            } else {
                timeOfQuest.seconds += 1
            }
            
            console.log(timeOfQuest)
            localStorage['questTime'] = JSON.stringify(timeOfQuest);
            return {...state, questTime: {...timeOfQuest}}

        case INITIAL_INTERVAL:
            return {...state, interval: createInterval()}

        default:
            return state
    }

    function createInterval() {
        return setInterval(() => {
            rootReducer(initialState, tickQuestTime())
        }, 1000)
    }

    function resetTime(stage, quest) {
        const newTime = {...state.questsTime}
        newTime[stage][quest] = {hours: 0, minutes: 0, seconds: 0}

        localStorage['questsTime'] = {...newTime}

        return {...state, questsTime: {...newTime}}
    }
}

