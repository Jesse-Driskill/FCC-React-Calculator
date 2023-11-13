import React from "react";
import ReactDOM from "react-dom";
import CalculatorContainer from "./components/CalculatorContainer";
import displayReducer from "./redux/reducers/displayReducer";
import {Provider} from "react-redux";
import {createStore} from "redux";

const store = createStore(displayReducer);

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="app">
            <CalculatorContainer></CalculatorContainer>
        </div>)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Provider store={store}>
            <App/>
        </Provider>, document.getElementById("main"));
})