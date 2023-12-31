import React from "react";
import CalculatorButton from "./CalculatorButton";
import ClearButton from "./ClearButton";
import DisplayContainer from "./DisplayContainer";
import {connect} from "react-redux";
import { changeDisplay, setDisplay } from "../redux/actions/changeDisplay";

const mapDispatchToProps = (dispatch) => {
    return {
        changeDisplay: (newDisplay) => dispatch(changeDisplay(newDisplay)),
        setDisplay: (newDisplay) => dispatch(setDisplay(newDisplay))
    }
}

const mapStateToProps = (state) => {
    return {
        currentDisplay: state.display
    }
}

class CalculatorButtonsContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        let buttons = ['7','8','9',"÷",'4','5','6',"×",'1','2','3',"-",".",'0',"=","+"];
        let buttonIds = ["seven", "eight", "nine", "divide", "four", "five", "six", "multiply", "one", "two", "three", "subtract", "decimal", "zero", "equals", "add"];
        let buttonValues = ['7','8','9',"/",'4','5','6',"*",'1','2','3',"-",".",'0',"=","+"];
        return (
        <div>
            <div id="calculator-buttons-container">
                {buttons.map((button, i) => {
                    return <CalculatorButton
                    setDisplay={this.props.setDisplay}
                    currentDisplay={this.props.currentDisplay} 
                    changeDisplay={this.props.changeDisplay} 
                    buttonValue={buttonValues[i]} 
                    id={buttonIds[i]} 
                    key={buttonIds[i]} 
                    buttonSymbol={button}></CalculatorButton>
                })}
            </div>
        </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorButtonsContainer);