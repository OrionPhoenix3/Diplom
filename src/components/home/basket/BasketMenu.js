import { useBasketContext } from "../../../hooks/useBasketContext";
import BasketCard from "./BasketCard";
import arrow from "../../../assets/navigation/arrow.svg";
import process from "../../../assets/process.png"

const CleanBasket = () => {
    const {setIsShowPanel} = useBasketContext();
    return (
        <div className="flex column">
            <img className="process__img" src={process} alt="process-img"/>
            <p className="process__text">You still don't have a single order</p>
            <button className="order-btn" onClick={() => setIsShowPanel(false)}>Order more</button>
        </div>
    )
}

const BasketMenu = () => {
    const {cards, hidePanel, clearBasket, isEmpty} = useBasketContext();
    const sumAllPositions = () => {
        let sum = 0;
        cards.forEach((card) => {
            sum += card.price * card.count;
        })
        return ("Order - $" + sum)
    }
    return (
        <>
            <div className={`basket__menu flex column ${isEmpty && "center"}`}>
                {!cards.length ?
                    <CleanBasket/>
                    :
                    <>
                        <div className="articles flex">
                            <span className="articles__title">Basket</span>
                            <img src={arrow} alt="filter" onClick={hidePanel} className="articles__img"/>
                        </div>
                        <div className="basket__cards">
                            {cards.map((card) => <BasketCard key={card.id} {...card}/>)}
                        </div>
                        <button className="order-btn" onClick={clearBasket}>{sumAllPositions()}</button>
                    </>
                }
            </div>

        </>
    )
}
export default BasketMenu