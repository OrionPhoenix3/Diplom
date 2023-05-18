import React, {useState} from "react";
import Card from "./Card";
import { items } from "./items";

const Cards = ({path}) => {
    const renderCards = (card) => {
      switch (path) {
          case "/home/all":
              return(<Card key={card.id} {...card}/>)
          case "/home"+card.path:
              return(<Card key={card.id} {...card}/>)
          default:
              break;
      }
    }
    return (
        <div className="cards">
            {items.map((card) => renderCards(card))}
        </div>
    )
}
export default Cards