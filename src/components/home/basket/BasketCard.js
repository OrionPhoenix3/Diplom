import { useBasketContext } from "../../../hooks/useBasketContext";
import plus from "../../../assets/card/basket_plus.svg"
import minus from "../../../assets/card/basket_minus.svg"

const BasketCard = (props) => {
    const {img, title, description, price, count} = props
    const {countPlus, countMinus, deleteCard} = useBasketContext();

    return (
        <div className="basket-card flex">
            <div className="basket__img-box">
                <img src={img} alt="" className="basket__img"/>
            </div>
            <div className="basket-card__container flex">
                <div>
                    <p className="card__title">
                        {title}
                    </p>
                    <p className="card__description">
                        {description}
                    </p>
                </div>
                <div className="basket-card__marks flex column">
                    <button className="basket__counter increments"
                            onClick={() => count > 1 ? countMinus(props) : deleteCard(props)}
                    >
                        <img src={minus} alt=""/>
                    </button>
                    <span className="basket__counter">x{count}</span>
                    <button className="basket__counter increments" onClick={() => countPlus(props)}>
                        <img src={plus} alt=""/>
                    </button>
                    <span className="basket__price">${price}</span>
                </div>
            </div>
        </div>
    )
}

export default BasketCard