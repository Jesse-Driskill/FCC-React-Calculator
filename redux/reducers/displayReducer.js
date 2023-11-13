// import { changeDisplay, clearDisplay } from "../actions/changeDisplay";
import { CHANGE, CLEAR} from "../actions/changeDisplay";

const displayReducer = (state = {display: ""}, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                display: state.display + action.display
            }
            break;
        case CLEAR:
            return {
                display: ""
            }
            break;
        default:
            return state;
    }
}

export default displayReducer;