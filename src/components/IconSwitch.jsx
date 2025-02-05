import { Component } from "react";

export default class IconSwitch extends Component {

    render() {
        // console.log(this.props.icon)
        return (
            <div className="icon-switch">
                <span className="material-icons" onClick={this.props.onSwitch}>{this.props.icon}</span>
            </div>
        )
    }
}