import { Component } from "react";

export default class ShopCard extends Component {
    render() {
        return (
            <div className="shop-card-container">
                <h1 className="shop-card-header">{this.props.name}</h1>
                <span className="shop-card-color">{this.props.color}</span>
                <img
                    className="shop-card-iamge"
                    src={this.props.src}
                    alt={this.props.src}
                />
                <div className="shop-card-price">
                    <span>
                        {"$"}
                        {this.props.price}
                    </span>
                    <button className="shop-card-button">add to card</button>
                </div>

            </div>
        )
    }
}