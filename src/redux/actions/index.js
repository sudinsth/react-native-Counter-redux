import { INCREMENT, DECREMENT } from "./actionTypes";

export const incNum = () => {
    return {
        type: INCREMENT,
    }
}
export const decNum = () => {
    return {
        type: DECREMENT,
    }
}