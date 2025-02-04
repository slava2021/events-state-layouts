import { Component } from "React";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

export default class Store extends Component {
    constructor(props) {
        super(props)

        this.icons = [
            "dashboard_2",
            "list"
        ]
        this.state = {
            icon: "dashboard_2"
        }
    }

    switch = (event) => {
        // console.log(event)
        let index = this.icons.indexOf(event.target.innerHTML);
        // console.log(index)
        if (index === 0) {
            this.setState({
                icon: "list"
            })
        } else {
            this.setState({
                icon: "dashboard_2"
            })
        }
    }

    render() {
        if (this.state.icon === "dashboard_2") {
            return (
                <>
                    <IconSwitch icon={this.state.icon} onSwitch={this.switch} />
                    <CardsView cards={this.props.products} />
                </>
            )
        } else if (this.state.icon === "list") {
            return (
                <>
                    <IconSwitch icon={this.state.icon} onSwitch={this.switch} />
                    <ListView items={this.props.products} />
                </>
            )
        }
    }
}