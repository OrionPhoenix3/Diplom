import React, {useContext, useEffect} from "react";
import HomeHeader from "../components/home/HomeHeader";
import Categories from "../components/home/categories/Categories";
import {useNavigate} from "react-router";
import {BasketContext} from "../context/BasketContext";
import BasketMenu from "../components/home/basket/BasketMenu";
import grapes from "../assets/decoration/grapes.png"
import burger from "../assets/discount.png"

const Home = () => {
    const {isShowPanel} = useContext(BasketContext)
    const navigate = useNavigate()
    
    const showLoader = () => {
        if (localStorage.getItem('showLoader') !== null) {
            document.getElementById("loader-container").classList.remove('invisible')
            localStorage.removeItem('showLoader')
        } else {
            return null
        }
    }

    useEffect(()=> { 
        navigate("/home/all")
        showLoader()
    },[])
    
    return (
        <div className="container">
            <div id="loader-container" className="loader invisible"> 
                <h1 className="loader__logo"  >
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