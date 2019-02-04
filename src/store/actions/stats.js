export const ADD_SYMBOL = "ADD_SUMBOL";
export const ADD_SUCCESSFUL_RUN = "ADD_SUCCESSFUL_RUN";
export const ADD_UNSUCCESSFUL_RUN = "ADD_UNSUCCESSFUL_RUN";
export const ADD_SPENDED_MONEY = "ADD_SPENDED_MONEY";
export const TICK_TIME_IN_GAME = "TICK_TIME_IN_GAME";
export const TICK_QUEST_TIME = "TICK_QUEST_TIME";
export const INITIAL_INTERVAL = "INITIAL_INTERVAL";

export function addSymbol() {
    return {
        type: ADD_SYMBOL
    }
}

export function addSuccessfulRun() {
    return {
        type: ADD_SUCCESSFUL_RUN
    }
}

export function addUnsuccessfulRun() {
    return {
        type: ADD_UNSUCCESSFUL_RUN
    }
}

export function tickTimeInGame() {
    return {
        type: TICK_TIME_IN_GAME
    }
}

export function tickQuestTime() {
    return {
        type: TICK_QUEST_TIME
    }
}

export function initialInterval(interval) {
    return {
        type: INITIAL_INTERVAL,
        payload: interval
    }
}