import React from "react";
import calculateFromString from "../logic/calculator";

class CalculatorButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let operands = {
            "+": true, "-": true, "/": true, "*": true
        }
        let currentState = this.props.currentDisplay;
        let lastChar = currentState[currentState.length - 1];
        let val = this.props.buttonValue;

        let currentNumberIsDecimal = false;

        for (let i = 0; i < currentState.length; i++) {
            if (currentState[i] === ".") {
                currentNumberIsDecimal = true;
            } else if (operands[currentState[i]] !== undefined) {
                currentNumberIsDecimal = false;
            }
        }

        let numbers = {
            "0": true, "1": true, "2": true, "3": true, "4": true, "5": true, "6": true, "7": true, "8": true, "9": true
        }

        console.log(currentState);

        if (currentNumberIsDecimal && val === ".") {

        } else if (currentState.length === 1 && numbers[val] === true && currentState[0] == "0") {
            this.props.setDisplay(val);
        } else if (val === "=") {
            this.props.setDisplay(calculateFromString(currentState));
            // this.props.setDisplay(calculateFromString(currentState));
        } else if (operands[val] === true) {
            if (operands[lastChar] === true) {
                if (val === "-" && operands[currentState[currentState.length-2]] === undefined) {
                    this.props.changeDisplay(val);
                } else {

                }
            } else {
                this.props.changeDisplay(val)
            }
        } else {
            this.props.changeDisplay(val);
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