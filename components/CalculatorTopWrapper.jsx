import React from "react";
import ClearButton from "./ClearButton";
import DisplayContainer from "./DisplayContainer";

class CalculatorTopWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="calculator-top-wrapper">
            <DisplayContainer></DisplayContainer>
            <ClearButton></ClearButton>
        </div>)
    }
}

export default CalculatorTopWrapper;