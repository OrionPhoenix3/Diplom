import React from "react";
import search from "../../assets/navigation/find.svg"
import exit from "../../assets/navigation/exit.svg"
import Basket from "./basket/Basket";
import Logo from "./Logo";
import {useNavigate} from "react-router";

const HomeHeader = () => {
    const navigate = useNavigate()
    const signOut = () => {
        navigate("/")
        localStorage.removeItem("user")
    }
    return (
        <div className="header">
            <Logo text="Welcome To Lucknow"/>
            <div className="panel">
                <Basket/>
                <img src={search} alt="search" className="panel__img search"/>
                <img src={exit} alt="exit" className="panel__img exit" onClick={signOut}/>
            </div>
        </div>
    )
}
export default HomeHeader