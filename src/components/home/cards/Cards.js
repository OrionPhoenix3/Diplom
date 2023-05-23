import { useState } from "react";
import Card from "./Card";
import { items } from "./items";

const Cards = ({path}) => {

    const check = (card) => {
        const changePath = '/home' + card.path
        return changePath === path ? renderCards(card) : 
        path === '/home/all' ? renderCards(card) : null
    }
   
    const renderCards = (card) => {
        return(<Card key={card.id} {...card}/>)
    }

    return (
        <div className="cards">
            {items.map((card) => check(card))}
        </div>
    )
}

export default Cards
 




