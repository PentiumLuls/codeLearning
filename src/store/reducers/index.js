import {SELECT_QUEST, SELECT_STAGE, PASS_QUEST, NEXT_LEVEL, NEXT_STEP, PREV_STEP} from '../actions/questActions'
import {
    RESET_CODE, WRITE_CODE, CHANGE_SHOW_POPUP, CLEAR_TERMINAL, SHOW_ANSWER,
    EXPORT_RUN, EXPORT_HIDE_NEXT_CODE, EXPORT_HIDE_CHAT, SET_HOT_KEY
} from '../actions/codeActions'
import {SPEND_MONEY, ADD_MONEY} from '../actions/moneyActions'
import {
    TICK_TIME_IN_GAME,
    ADD_SYMBOL,
    ADD_SUCCESSFUL_RUN,
    ADD_UNSUCCESSFUL_RUN,
    CHANGE_MUSIC_VALUE,
    CHANGE_SOUND_VALUE,
    CHANGE_AVATAR,
    CHANGE_MUSIC,
    UNLOCK_AVATAR
} from '../actions/statActions'
import {quests} from '../../plot/quests';
import CryptoJS from 'crypto-js'
import * as toastr from "toastr";
import {achievementsList} from "../../components/Profile/Achievements/achievementsList";

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
    localStorage['whiteList'] = JSON.stringify([[0, 1, 2, 3, 6], [0, 2, 4], [0], [0, 1], [0, 3], [0,]]);

}
if (!localStorage['code']) {
    localStorage['code'] = quests[0].quests[0].code;
}
if (!localStorage['LH;;tabs']) {
    localStorage['LH;;tabs'] = CryptoJS.AES.encrypt('100', 'Kt0 et0 ch1tayet t0t l0h');
}
if (!localStorage['passingLevels']) {
    localStorage['passingLevels'] = JSON.stringify([[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]);
}
if (!localStorage['achievements']) {
    localStorage['achievements'] = JSON.stringify([{id: 0, status: -1}, {id: 1, status: -1}, {id: 2, status: -1},
        {id: 3, status: -1}, {id: 4, status: -1}, {id: 5, status: -1, time: 0}, {id: 6, status: -1, payload: 0},
        {id: 7, status: -1, earned: 0}, {id: 8, status: -1, spend: 0}, {id: 9, status: -1}, {id: 10, status: -1},
        {id: 11, status: -1, times: 0}, {id: 12, status: -1}, {id: 13, status: -1}, {id: 14, status: -1}]);
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
    localStorage['questTime'] = new Date();
}
if (!localStorage['records']) {
    localStorage['records'] = JSON.stringify(
        [
            [],
            [],
            [],
            [],
            [],
            []
        ])
}
if (!localStorage['hotKey']) {
    localStorage['hotKey'] = 'Ctrl-shift-x'
}
if (!localStorage['musicValue']) {
    localStorage['musicValue'] = '0.4'
}
if (!localStorage['soundValue']) {
    localStorage['soundValue'] = '1.0'
}
if (!localStorage['avatar']) {
    localStorage['avatar'] = 'vanDam'
}
if (!localStorage['music']) {
    localStorage['music'] = 'sans'
}
if (!localStorage['unlockedAvatars']) {
    localStorage['unlockedAvatars'] = JSON.stringify({
        vanDam: true, papich: true,
        futaba: false, nanachi: false, pikachu: false, reroRero: false,
        ricardo: false, splinter: false, zeroTwo: false, denis: false
    })
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
    questTime: new Date(),
    records: JSON.parse(localStorage['records']),
    hotKey: localStorage['hotKey'],
    musicValue: +localStorage['musicValue'],
    soundValue: +localStorage['soundValue'],
    avatar: localStorage['avatar'],
    music: localStorage['music'],
    unlockedAvatars: JSON.parse(localStorage['unlockedAvatars'])
};


export function rootReducer(state = initialState, action) {

    let achievements = JSON.parse(localStorage['achievements']);

    switch (action.type) {
        case SELECT_QUEST:
            const currentDate1 = new Date();
            state.hideNextLevel();
            localStorage.currentQuest = action.payload;
            localStorage['questTime'] = currentDate1;

            return {...state, currentQuest: action.payload, questTime: currentDate1};

        case SELECT_STAGE:
            localStorage.currentStage = action.payload;
            return {...state, currentStage: action.payload};

        case PASS_QUEST:
            const passingLevels = JSON.parse(localStorage['passingLevels']);
            const currentDate = new Date();

            if (state.currentStage == state.passStages && state.currentQuest == state.passQuests) {
                localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money + 5}`, 'Kt0 et0 ch1tayet t0t l0h');
                toastr.success("5 сыра получено");

                const record = [...state.records];
                record[state.currentStage][state.currentQuest] = (Date.parse(currentDate) - Date.parse(state.questTime)) / 1000;
                localStorage['records'] = JSON.stringify(record)


                if (state.currentQuest > 0) {
                    passingLevels[state.currentStage][state.currentQuest - 1] = 1;
                    localStorage['passingLevels'] = JSON.stringify(passingLevels);
                } else if (state.currentStage > 0) {
                    passingLevels[state.currentStage - 1][quests[state.currentStage].quests.length - 1] = 1;
                    localStorage['passingLevels'] = JSON.stringify(passingLevels);
                }
                //ACHIEVEMENTS - EARNED N MONEY
                if (achievements[7].status === -1) {
                    achievements[7].earned += 5;
                }
                localStorage['achievements'] = JSON.stringify(achievements);

                if (localStorage["passStages"] == 5 && localStorage["passQuests"] == 5) {
                    //IF FINAL LEVEL
                    return {...state, money: state.money + 5, records: record};
                } else {
                    if (state.currentQuest == quests[state.currentStage].quests.length - 1) {

                        localStorage.passStages = state.currentStage + 1;
                        localStorage.passQuests = 0;
                        return {
                            ...state,
                            passStages: state.currentStage + 1,
                            passQuests: 0,
                            money: state.money + 5,
                            records: record
                        }
                    } else {
                        localStorage.passQuests = state.currentQuest + 1;
                        return {...state, passQuests: state.currentQuest + 1, money: state.money + 5, records: record}
                    }
                }
            }


            const record = [...state.records];

            if ((Date.parse(currentDate) - Date.parse(state.questTime)) / 1000
                < record[state.currentStage][state.currentQuest]) {
                record[state.currentStage][state.currentQuest] = (Date.parse(currentDate) - Date.parse(state.questTime)) / 1000
            }

            localStorage['records'] = JSON.stringify(record);

            if (passingLevels[state.currentStage][state.currentQuest] > 0) {


                passingLevels[state.currentStage][state.currentQuest] -= 1;
                localStorage['passingLevels'] = JSON.stringify(passingLevels);
                localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money + 3}`, 'Kt0 et0 ch1tayet t0t l0h');
                toastr.success("3 сыра получено");
                //ACHIEVEMENTS - EARNED N MONEY
                if (achievements[7].status === -1) {
                    achievements[7].earned += 3;
                }
                localStorage['achievements'] = JSON.stringify(achievements);
                return {...state, money: state.money + 3, records: record}
            }

            return {...state, records: record};


        case NEXT_LEVEL:
            const currentDate2 = new Date();
            localStorage['questTime'] = currentDate2;
            if (state.currentQuest == quests[state.currentStage].quests.length - 1) {
                localStorage.currentStage = state.currentStage + 1;
                localStorage.currentQuest = 0;
                return {...state, currentStage: state.currentStage + 1, currentQuest: 0, questTime: currentDate2}
            } else {
                localStorage.currentQuest = state.currentQuest + 1;
                return {...state, currentQuest: state.currentQuest + 1, questTime: currentDate2}
            }


        case RESET_CODE:
            localStorage.code = quests[state.currentStage].quests[state.currentQuest].code;
            return {
                ...state,
                code: quests[state.currentStage].quests[state.currentQuest].code,
                resets: state.resets + 1
            };

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
            toastr.success(action.payload + " сыра получено");
            if (achievements[6].status === -1) {
                achievements[6].payload += action.payload;
            }
            localStorage['achievements'] = JSON.stringify(achievements);

            localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money + action.payload}`, 'Kt0 et0 ch1tayet t0t l0h');
            return {...state, money: state.money + action.payload};

        case SPEND_MONEY:
            toastr.success(action.payload + " сыра потрачено");
            localStorage['stats'] = JSON.stringify({
                ...state.stats,
                spendMoneys: state.stats.spendMoneys + action.payload
            })

            localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money - action.payload}`, 'Kt0 et0 ch1tayet t0t l0h');
            if (achievements[8].status === -1) {
                achievements[8].spend += action.payload;
            }
            localStorage['achievements'] = JSON.stringify(achievements);
            return {
                ...state,
                money: state.money - action.payload,
                stats: {...state.stats, spendMoneys: state.stats.spendMoneys + action.payload}
            };

        case TICK_TIME_IN_GAME:
            const time = {...state.timeInGame};
            if (time.seconds === 59) {
                if (time.minutes === 59) {
                    time.hours += 1;
                    time.minutes = 0;
                    time.seconds = 0
                } else {
                    time.minutes += 1;
                    time.seconds = 0
                }
            } else {
                time.seconds += 1
            }

            localStorage['timeInGame'] = JSON.stringify(time);
            return {...state, timeInGame: time};

        case ADD_SYMBOL:
            localStorage['stats'] = JSON.stringify({...state.stats, symbols: state.stats.symbols + 1});
            return {...state, stats: {...state.stats, symbols: state.stats.symbols + 1}};

        case ADD_SUCCESSFUL_RUN:
            localStorage['stats'] = JSON.stringify({...state.stats, successfulRuns: state.stats.successfulRuns + 1});
            return {...state, stats: {...state.stats, successfulRuns: state.stats.successfulRuns + 1}};

        case ADD_UNSUCCESSFUL_RUN:
            localStorage['stats'] = JSON.stringify({
                ...state.stats,
                unsuccessfulRuns: state.stats.unsuccessfulRuns + 1
            });
            return {...state, stats: {...state.stats, unsuccessfulRuns: state.stats.unsuccessfulRuns + 1}};

        case SET_HOT_KEY:
            localStorage['hotKey'] = action.payload;
            return {...state, hotKey: action.payload};

        case CHANGE_MUSIC_VALUE:
            localStorage['musicValue'] = action.payload;
            return {...state, musicValue: action.payload};

        case CHANGE_SOUND_VALUE:
            localStorage['soundValue'] = action.payload;
            return {...state, soundValue: action.payload};

        case CHANGE_AVATAR:
            localStorage['avatar'] = action.payload;
            return {...state, avatar: action.payload};

        case CHANGE_MUSIC:
            localStorage['music'] = action.payload;
            return {...state, music: action.payload};

        case UNLOCK_AVATAR:
            const avatars = JSON.parse(localStorage['unlockedAvatars']);
            avatars[action.payload] = true;

            localStorage['unlockedAvatars'] = JSON.stringify(avatars);
            return {...state, unlockedAvatars: avatars};

        default:
            return {...state}
    }
}