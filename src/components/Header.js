import React from "react";
import Logo from "./home/Logo";
import exit from "../assets/navigation/exit.svg";
import {useNavigate} from "react-router";

const Header = () => {
    const navigate = useNavigate()
    const signOut = () => {
        navigate("/")
        localStorage.removeItem("user")
    }
    return (
        <div className="header">
            <Logo text="Welcome To Lucknow"/>
            <div className="panel">
                <img src={exit} alt="exit" className="panel__img exit" onClick={signOut}/>
            </div>
        </div>
    )
}
export default Header