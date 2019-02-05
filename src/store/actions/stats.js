export const ADD_SYMBOL = "ADD_SUMBOL";
export const ADD_SUCCESSFUL_RUN = "ADD_SUCCESSFUL_RUN";
export const ADD_UNSUCCESSFUL_RUN = "ADD_UNSUCCESSFUL_RUN";
export const ADD_SPENDED_MONEY = "ADD_SPENDED_MONEY";
export const TICK_TIME_IN_GAME = "TICK_TIME_IN_GAME";

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
