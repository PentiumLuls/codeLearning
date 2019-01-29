export const RESET_CODE = 'RESET_CODE';
export const WRITE_CODE = 'WRITE_CODE';
export const CHANGE_SHOW_POPUP = 'CHANGE_SHOW_POPUP';
export const CLEAR_TERMINAL = 'CLEAR_TERMINAL';

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

