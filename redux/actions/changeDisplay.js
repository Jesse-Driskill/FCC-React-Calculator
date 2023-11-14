export const CHANGE = "CHANGE";
export const CLEAR = "CLEAR";
export const SET = "SET";

export const changeDisplay = (newDisplay) => {
    return {
        type: CHANGE, display: newDisplay, realValue: newDisplay
    }
}

export const clearDisplay = () => {
    return {
        type: CLEAR
    }
}

export const setDisplay = (newDisplay) => {
    return {
        type: SET, display: newDisplay
    }
}

