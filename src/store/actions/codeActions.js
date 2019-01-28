export const RESET_CODE = 'RESET_CODE';
export const WRITE_CODE = 'WRITE_CODE';

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