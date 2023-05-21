import basket from "../../../assets/navigation/basket.svg";
import { useBasketContext } from "../../../hooks/useBasketContext";

const Basket = () => {
    const {isEmpty, showPanel, basketCounter} = useBasketContext()
    return (
        <div className='basket-div'>
                <img src={basket} alt="basket" onClick={showPanel} className="panel__img basket"/>
                {!isEmpty && <span className="basket-indicator">{basketCounter}</span>}
        </div>
    )
}

export default Basket