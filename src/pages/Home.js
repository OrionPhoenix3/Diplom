import { useEffect, useState } from "react";
import HomeHeader from "../components/home/HomeHeader";
import Categories from "../components/home/categories/Categories";
import { useNavigate } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
import { useBasketContext } from "../hooks/useBasketContext";
import BasketMenu from "../components/home/basket/BasketMenu";
import grapes from "../assets/decoration/grapes.png"
import burger from "../assets/discount.png"

const Home = () => {
    const {showLoader, setShowLoader} = useAuthContext()
    const {isShowPanel} = useBasketContext()
    const [isInvisible, setIsInvisible] = useState(true)
    const navigate = useNavigate()
    
    const toggleLoader = () => {
        if (showLoader === true) {
            setIsInvisible(false)
            setShowLoader(false)
            setTimeout(() => {
                setIsInvisible(true)
            }, 5000)
        } else {
            return null
        }
    }

    useEffect(()=> { 
        navigate("/home/all")
        toggleLoader()
    },[])
    
    return (
        <div className="container">
            <div id="loader-container" className={`loader ${isInvisible && 'invisible'}`}> 
                <h1 className="loader__logo">
                    Yelp App
                </h1>
                <span className="loader__text"  >
                    Developed by Vladyslav Ziabriev
                </span>
                <img src={grapes} alt="img" className="loader__img1" />
                <img src={burger} alt="img" className="loader__img2" />
                <div className="loader__div1"></div>
                <div className="loader__div2"></div>
            </div>
            <HomeHeader/>
            <Categories/>
            {isShowPanel && <BasketMenu/>}
        </div>
    )
}

export default Home