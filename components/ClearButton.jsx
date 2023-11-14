import React from "react";
import { store } from "../main";

class ClearButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.clearDisplay();
    }

    render() {
        return <div id="clear" className="calculator-button" onClick={this.handleClick}>  
            AC
        </div>
    }
}

export default ClearButton;