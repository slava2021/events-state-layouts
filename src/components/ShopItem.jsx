import { Component } from "react";

export default class ShopItem extends Component {
    render() {
        return (
            <div className="shop-item-container">
                <img
                    className="shop-item-iamge"
                    src={this.props.src}
                    alt={this.props.src}
                />
                <h1 className="shop-item-header">{this.props.name}</h1>
                <span className="shop-item-color">{this.props.color}</span>

                <span className="shop-item-price">
                    {"$"}
                    {this.props.price}
                </span>

                <button className="shop-item-button">add to card</button>
            </div>
        )
    }
}