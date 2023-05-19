import React, {useEffect, useState} from "react";
import Navigation from "../../router/Navigation";
import avatar from "../../assets/avatar.png";
import delivery from "../../assets/delivery.png";
import arrow from "../../assets/navigation/arrow.svg";
import useWindowDimensions from "../Resize";
import BurgerBtn from "../BurgerBtn";

const NavPanel = () => {
    const [isBurger, setIsBurger] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const {width} = useWindowDimensions()
    const div = document.querySelector(".burger-panel");

    if (isBurger && isActive){
        document.addEventListener("click", (e)=>{
            const withinBoundaries = e.composedPath().includes(div);

            if ( ! withinBoundaries ) {
                setIsActive(!isActive)
            }
        })
    }

    const handleClick = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        const navPanelContainer = document.getElementById('navPanelContainer');
        if (width <= 980) {
            setIsBurger(true)
        } else {
            setIsBurger(false)
        }

        if (localStorage.getItem('showLoader') !== null) {
            navPanelContainer.classList.add('invisible');
            setTimeout(() => {
                navPanelContainer.classList.remove('invisible');
            }, 2200)
        }
        else if (localStorage.getItem('showLoader') == null && !navPanelContainer.classList.contains('invisible')){
            navPanelContainer.classList.remove('invisible');
        }
    }, [width])

    return (
        <div id="navPanelContainer" className={`flex column ${isBurger && "burger-panel"} ${!isActive ? "active-p" : "disable-p"}`}>
            {isBurger && <BurgerBtn onClick={handleClick} isActive={isActive}/>}
            <div className="avatar flex column">
                <div className="avatar__container">
                    <img className="avatar__img" src={avatar} alt="avatar"/>
                </div>
                <span className="avatar__name">Full Name</span>
            </div>
            <Navigation/>
            <div className="delivery flex column-r ">
                <img className="delivery__img" src={delivery} alt="delivery"/>
                <div className="flex space-b delivery__link">
                    <span className="delivery__small">Know More</span>
                    <img src={arrow} alt="arrow" className="delivery__btn"/>
                </div>
                <span className="delivery__title">Faster delivery!</span>
            </div>
        </div>
    )
}

export default NavPanel