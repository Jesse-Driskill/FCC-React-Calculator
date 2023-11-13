import React from "react";

class CalculatorButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick() {
        this.props.changeDisplay(this.props.buttonValue);
        // console.log(this.props);
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