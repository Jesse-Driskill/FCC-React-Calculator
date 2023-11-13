import React from "react";

class ClearButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="clear" className="calculator-button">
            AC
        </div>
    }
}

export default ClearButton;