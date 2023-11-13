import React from "react";
import CalculatorButtonsContainer from "./CalculatorButtonsContainer";
import DisplayContainer from "./DisplayContainer";
import CalculatorTopWrapper from "./CalculatorTopWrapper";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div id="calculator">
            <CalculatorTopWrapper></CalculatorTopWrapper>
            <CalculatorButtonsContainer></CalculatorButtonsContainer>

        </div>)
    }
}

export default Calculator;