export const ADD_MONEY = 'ADD_MONEY';
export const SPEND_MONEY = 'SPEND_MONEY';

export function addMoney(amount) {
    return {
        type: ADD_MONEY,
        payload: amount
    }
}

export function spendMoney(amount) {
    return {
        type: SPEND_MONEY,
        payload: amount
    }
}