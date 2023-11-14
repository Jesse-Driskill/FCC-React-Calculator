import React from "react";
import calculateFromString from "../logic/calculator";

class CalculatorButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        let currentState = this.props.currentDisplay;
        let lastChar = currentState[currentState.length - 1];
        let val = this.props.buttonValue;

        
        let numbers = {
            "0": true, "1": true, "2": true, "3": true, "4": true, "5": true, "6": true, "7": true, "8": true, "9": true
        }

        console.log(currentState);

        if (currentState.length === 1 && numbers[val] === true && currentState[0] == "0") {
            this.props.setDisplay(this.props.buttonValue);
        } else if (val === "=") {
            calculateFromString(currentState)
            // this.props.setDisplay(calculateFromString(currentState));
        } else {
            this.props.changeDisplay(this.props.buttonValue);
        }


    }

    render() {
        return (
            <div id={this.props.id} className="calculator-button" onClick={this.handleClick}>
                {this.props.buttonSymbol}
            </div>
        )
    }
}

export default CalculatorButton;