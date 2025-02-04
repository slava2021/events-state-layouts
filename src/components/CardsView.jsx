import { Component } from "react";
import ShopCard from "./ShopCard";

export default class CardsView extends Component {

    render() {
        // console.log(this.props.cards)
        return (
            <div className="cards-view-container">
                {this.props.cards.map((card, index) => {
                    return (
                        <ShopCard
                            key={index}
                            src={card.img}
                            name={card.name}
                            color={card.color}
                            price={card.price}

                        />
                    )
                })}
            </div>
        )
    }
}