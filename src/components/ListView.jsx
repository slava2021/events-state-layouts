import { Component } from "react";
import ShopItem from "./ShopItem";

export default class ListView extends Component {

    render() {
        // console.log(this.props.cards)
        return (
            <div className="list-view-container">
                {this.props.items.map((item, index) => {
                    return (
                        <ShopItem
                            key={index}
                            src={item.img}
                            name={item.name}
                            color={item.color}
                            price={item.price}

                        />
                    )
                })}
            </div>
        )
    }
}