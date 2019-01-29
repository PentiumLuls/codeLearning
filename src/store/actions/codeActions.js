export const RESET_CODE = 'RESET_CODE';
export const WRITE_CODE = 'WRITE_CODE';
export const CHANGE_SHOW_POPUP = 'CHANGE_SHOW_POPUP'

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