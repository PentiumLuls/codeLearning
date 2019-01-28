export const SELECT_QUEST = 'SELECT_QUEST';
export const SELECT_STAGE = 'SELECT_STAGE';
export const PASS_QUEST = 'PASS_QUEST';
export const NEXT_LEVEL = 'NEXT_LEVEL';
export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';

export function selectQuest(quest) {
    return {
        type: SELECT_QUEST,
        payload: quest
    }
}

export function selectStage(stage) {
    return {
        type: SELECT_STAGE,
        payload: stage
    }
}

export function passQuest(stage, quest) {
    return {
        type: PASS_QUEST,
        payloadStage: stage,
        payloadQuest: quest
    }
}

export function nextLevel() {
    return {
        type: NEXT_LEVEL
    }
}

export function nextStep() {
    return {
        type: NEXT_STEP
    }
}

export function prevStep() {
    return {
        type: PREV_STEP
    }
}




