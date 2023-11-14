// import { changeDisplay, clearDisplay } from "../actions/changeDisplay";
import { CHANGE, CLEAR, SET} from "../actions/changeDisplay";

let operations = new Set("*", "+", "/", "-");
let numbers = new Set("1","2","3","4","5","6","7","8","9","0");
let equals = "";

function determineDisplay(s, a) {
    let currentState = s.display;
    let newChar = a.display;
    let last = currentState[currentState.length - 1];

    
}

const displayReducer = (state = {display: "0"}, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                display: state.display + action.display
            }
            break;
        case CLEAR:
            return {
                display: "0"
            }
            break;
        case SET: {
            return {
                display: action.display
            }
            break;
        }
        default:
            return state;
    }
}

export default displayReducer;