import { Component } from "react";

export default class IconSwitch extends Component {

    render() {
        // console.log(this.props.icon)
        return (
            <div className="material-icons" onClick={this.props.onSwitch}>
                {this.props.icon}
            </div>
        )
    }
}