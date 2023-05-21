import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

export const useBasketContext = () => {
    const context = useContext(BasketContext)
    return context
}