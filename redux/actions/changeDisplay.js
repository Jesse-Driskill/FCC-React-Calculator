export const CHANGE = "CHANGE";
export const CLEAR = "CLEAR";

export const changeDisplay = (newDisplay) => {
    return {
        type: CHANGE, display: newDisplay
    }
}

export const clearDisplay = () => {
    return {
        type: CLEAR
    }
}


