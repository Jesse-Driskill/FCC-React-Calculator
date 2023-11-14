// import { changeDisplay, clearDisplay } from "../actions/changeDisplay";
import { CHANGE, CLEAR, SET} from "../actions/changeDisplay";

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