export const RESET_CODE = 'RESET_CODE';
export const WRITE_CODE = 'WRITE_CODE';
export const CHANGE_SHOW_POPUP = 'CHANGE_SHOW_POPUP';
export const CLEAR_TERMINAL = 'CLEAR_TERMINAL';
export const SHOW_ANSWER = 'SHOW_ANSWER';
export const EXPORT_RUN = 'EXPORT_RUN';

export function resetCode() {
    return {
        type: RESET_CODE 
    }
}

export function writeCode(can) {
    return {
        type: WRITE_CODE,
        payload: can
    }
}

export function changeShowPopup(can) {
    return {
        type: CHANGE_SHOW_POPUP,
        payload: can
    }
}

export function clearTerminal(func) {
    return {
        type: CLEAR_TERMINAL,
        payload: func
    }
}

export function showAnswer() {
    return {
        type: SHOW_ANSWER
    }
}

export function exportRun(func) {
    return {
        type: EXPORT_RUN,
        payload: func
    }
}

