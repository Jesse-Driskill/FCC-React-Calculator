import React from "react";
import Calculator from "./Calculator";

class CalculatorContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="calculator-container">
            <Calculator>
            </Calculator>
            </div>)
    }
}

export default CalculatorContainer;