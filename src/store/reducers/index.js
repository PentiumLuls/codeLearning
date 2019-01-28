import { SELECT_QUEST, SELECT_STAGE, PASS_QUEST, NEXT_LEVEL, NEXT_STEP, PREV_STEP } from '../actions/questActions'
import { RESET_CODE, WRITE_CODE } from '../actions/codeActions'
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
    localStorage['whiteList'] = JSON.stringify([[0, 1, 2, 3, 4, 6], [0, 2]]);
}


export const initialState = {
    passStages: +localStorage.passStages,
    passQuests: +localStorage.passQuests,
    currentStage: +localStorage.currentStage,
    currentQuest: +localStorage.currentQuest,
    code: localStorage.code,
    step: 2,
    writeCode: false,
    resets: 0
}


export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_QUEST:
            return {...state, currentQuest: action.payload}
        
        case SELECT_STAGE:
            return {...state, currentStage: action.payload}
        
        case PASS_QUEST:
            if (action.payloadQuest == quests[action.payloadStage].quests.length - 1) {
                return {...state, passStages: action.payloadStage + 1, passQuests: 0}
            } else {
                return {...state, passStages: action.payloadStage, passQuests: action.payloadQuest}
            }

        case NEXT_LEVEL:
            if (state.currentQuest == quests[state.currentStage].quests.length - 1) {
                return {...state, currentStage: state.currentStage + 1, currentQuest: 0}
            } else {
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

        default:
            return state
    }
}