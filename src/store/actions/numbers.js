import {
    CHANGE_MIN_NUM,
    CHANGE_MAX_NUM
} from './actionTypes'

//Action Creator
export function changeMinNumber(newNumber) {
    return {
        type: CHANGE_MIN_NUM,
        payload: newNumber
    }
}

//Action Creator
export function changeMaxNumber(newNumber) {
    return {
        type: CHANGE_MAX_NUM,
        payload: newNumber
    }
}