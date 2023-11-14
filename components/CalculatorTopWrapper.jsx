import React from "react";
import ClearButton from "./ClearButton";
import DisplayContainer from "./DisplayContainer";
import { clearDisplay } from "../redux/actions/changeDisplay";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        clearDisplay: () => dispatch(clearDisplay()) 
    }
}

class CalculatorTopWrapper extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props, 'hi')
    }

    render() {
        return (<div id="calculator-top-wrapper">
            <DisplayContainer></DisplayContainer>
            <ClearButton clearDisplay={this.props.clearDisplay}></ClearButton>
        </div>)
    }
}

export default connect(null, mapDispatchToProps)(CalculatorTopWrapper);