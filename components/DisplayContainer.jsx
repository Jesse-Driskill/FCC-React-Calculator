import React from "react";
import Display from "./Display";
import { connect } from "react-redux";
// import mapStateToProps from "../redux/props/mapStateToProps";

const mapStateToProps = (state) => {
    return {
        display: state.display
    }
}

class DisplayContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return <div id="display-container">
            <Display display={this.props.display}></Display>
        </div>
    }
}

export default connect(mapStateToProps, null)(DisplayContainer);