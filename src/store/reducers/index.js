import { SELECT_QUEST, SELECT_STAGE, PASS_QUEST, NEXT_LEVEL, NEXT_STEP, PREV_STEP } from '../actions/questActions'
import { RESET_CODE, WRITE_CODE, CHANGE_SHOW_POPUP, CLEAR_TERMINAL, SHOW_ANSWER, EXPORT_RUN, EXPORT_HIDE_NEXT_CODE, EXPORT_HIDE_CHAT } from '../actions/codeActions'
import { SPEND_MONEY, ADD_MONEY } from '../actions/moneyActions'
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
    hideChat: null
}


export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_QUEST:
            state.hideNextLevel();
            localStorage.currentQuest = action.payload;
            return {...state, currentQuest: action.payload}
        
        case SELECT_STAGE:
            localStorage.currentStage = action.payload;
            return {...state, currentStage: action.payload}
        
        case PASS_QUEST:
            const passingLevels = JSON.parse(localStorage['passingLevels']);

            if (state.currentStage == state.passStages && state.currentQuest == state.passQuests) {
                localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money + 5}`, 'Kt0 et0 ch1tayet t0t l0h');
                if (state.currentQuest > 0) {
                    passingLevels[state.currentStage][state.currentQuest - 1] = 1
                    localStorage['passingLevels'] = JSON.stringify(passingLevels);
                } else if (state.currentStage > 0) {
                    passingLevels[state.currentStage - 1][quests[state.currentStage].quests.length - 1] = 1
                    localStorage['passingLevels'] = JSON.stringify(passingLevels);
                }

                if (state.currentQuest == quests[state.currentStage].quests.length - 1) {

                    localStorage.passStages = state.currentStage + 1;
                    localStorage.passQuests = 0;
                    return {...state, passStages: state.currentStage + 1, passQuests: 0, money: state.money + 5}
                } else {
                    localStorage.passQuests = state.currentQuest + 1;
                    return {...state, passQuests: state.currentQuest + 1, money: state.money + 5}
                }
            }
            
            if (passingLevels[state.currentStage][state.currentQuest] > 0) {
                passingLevels[state.currentStage][state.currentQuest] -= 1
                localStorage['passingLevels'] = JSON.stringify(passingLevels);
                localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money + 3}`, 'Kt0 et0 ch1tayet t0t l0h');
                return {...state, money: state.money + 3}
            } return {...state}
            
            

        case NEXT_LEVEL:
            if (state.currentQuest == quests[state.currentStage].quests.length - 1) {
                localStorage.currentStage = state.currentStage + 1;
                localStorage.currentQuest = 0;
                return {...state, currentStage: state.currentStage + 1, currentQuest: 0}
            } else {
                localStorage.currentQuest = state.currentQuest + 1
                return {...state, currentQuest: state.currentQuest + 1}
            }

        case RESET_CODE:
            localStorage.code = quests[state.currentStage].quests[state.currentQuest].code
            return {...state, code: quests[state.currentStage].quests[state.currentQuest].code, resets: state.resets + 1}

        case NEXT_STEP:
            return {...state, step: state.step + 1}

        case PREV_STEP:
            return {...state, step: state.step - 1}

        case WRITE_CODE:
            return {...state, writeCode: action.payload}

        case CHANGE_SHOW_POPUP:
            return {...state, showPopup: action.payload}

        case CLEAR_TERMINAL:
            return {...state, clear: action.payload}

        case SHOW_ANSWER:
            localStorage.code = quests[state.currentStage].quests[state.currentQuest].test.answer;
            return {...state, code: quests[state.currentStage].quests[state.currentQuest].test.answer}

        case EXPORT_RUN:
            return {...state, run: action.payload}

        case EXPORT_HIDE_NEXT_CODE:
            return {...state, hideNextLevel: action.payload}

        case EXPORT_HIDE_CHAT:
            return {...state, hideChat: action.payload}

        case ADD_MONEY:
            localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money + action.payload}`, 'Kt0 et0 ch1tayet t0t l0h');
            console.log(CryptoJS.AES.decrypt(localStorage['LH;;tabs'].toString(), 'Kt0 et0 ch1tayet t0t l0h').toString(CryptoJS.enc.Utf8));
            return {...state, money: state.money + action.payload}

        case SPEND_MONEY:
            localStorage['LH;;tabs'] = CryptoJS.AES.encrypt(`${state.money - action.payload}`, 'Kt0 et0 ch1tayet t0t l0h');
            console.log(CryptoJS.AES.decrypt(localStorage['LH;;tabs'].toString(), 'Kt0 et0 ch1tayet t0t l0h').toString(CryptoJS.enc.Utf8));
            return {...state, money: state.money - action.payload}

        default:
            return state
    }
}