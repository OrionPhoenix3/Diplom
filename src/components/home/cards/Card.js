import React, {useContext, useEffect, useState} from "react";
import add from "../../../assets/card/plus.svg"
import select from "../../../assets/card/select.svg"
import {BasketContext} from "../../../context/BasketContext";

const Card = ({img, title, description, price, mark, markBg, styles}) => {
    const [addToBasket, setAddToBasket] = useState(false);
    const {cards, addCard, isEmpty, deleteCard} = useContext(BasketContext);

    useEffect(() => {
        if (isEmpty) {
            setAddToBasket(false)
        }
        checkAtBasket(title)
        }, [isEmpty, title])

    const checkAtBasket = (title) => {
        cards.filter((el) => {
            if (el.title === title) {
                setAddToBasket(true)
            }
        })
    }

    const handleClick = () => {
        setAddToBasket(!addToBasket)
        if (!addToBasket) {
            addCard({id: Date.now().toLocaleString(), img, price, description, title, count: 1, setAddToBasket})
        } else {
            deleteCard({title,setAddToBasket})
        }
    }

    return (
        <div className="card" style={addToBasket ? {background: "#F2EEEE"} : undefined}>
            <img className={styles} src={img} alt="img"/>
            {mark && <img className="card__mark" style={{background: markBg}} src={mark} alt="mark"/>}
            <p className="card__title">{title}</p>
            <p className="card__description">{description}</p>
            <div className="card__add">
                <span className="card__price">${price}</span>
                <img className="card__btn"
                     style={addToBasket ? {background: "white"} : undefined}
                     src={!addToBasket ? add : select}
                     alt="add"
                     onClick={handleClick}
                />
            </div>
        </div>
    )
}
export default Card