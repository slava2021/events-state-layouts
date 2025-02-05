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
            iconState: "dashboard_2"
        }
    }

    switch = (event) => {
        // console.log(event)
        let index = this.icons.indexOf(event.target.innerText);
        // console.log(event)
        if (index === 0) {
            this.setState({
                iconState: "list"
            })
        } else {
            this.setState({
                iconState: "dashboard_2"
            })
        }
    }

    render() {
        if (this.state.iconState === "dashboard_2") {
            return (
                <>
                    <IconSwitch icon={this.state.iconState} onSwitch={this.switch} />
                    <CardsView cards={this.props.products} />
                </>
            )
        } else if (this.state.iconState === "list") {
            return (
                <>
                    <IconSwitch icon={this.state.iconState} onSwitch={this.switch} />
                    <ListView items={this.props.products} />
                </>
            )
        }
    }
}