import { SELECT_QUEST, SELECT_STAGE, PASS_QUEST, NEXT_LEVEL, NEXT_STEP, PREV_STEP} from '../actions/questActions'
import { RESET_CODE, WRITE_CODE, CHANGE_SHOW_POPUP, CLEAR_TERMINAL, SHOW_ANSWER, EXPORT_RUN } from '../actions/codeActions'
import {quests} from '../../plot/quests';

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
    localStorage['whiteList'] = JSON.stringify([[0, 1, 2, 3, 6], [0, 2, 4]]);
}
if (!localStorage['code']) {
    localStorage['code'] = quests[0].quests[0].code;
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
    run: null
}


export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_QUEST:
            localStorage.currentQuest = action.payload;
            return {...state, currentQuest: action.payload}
        
        case SELECT_STAGE:
            localStorage.currentStage = action.payload;
            return {...state, currentStage: action.payload}
        
        case PASS_QUEST:
            if (state.currentStage == state.passStages && state.currentQuest == state.passQuests) {
                if (state.currentQuest == quests[state.currentStage].quests.length - 1) {

                    localStorage.passStages = state.currentStage + 1;
                    localStorage.passQuests = 0;
                    return {...state, passStages: state.currentStage + 1, passQuests: 0}
                } else {
                    localStorage.passQuests = state.currentQuest + 1;
                    return {...state, passQuests: state.currentQuest + 1}
                }
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

        default:
            return state
    }
}