import React from "react";
import smile from "../../assets/smile.png";
import {useLocation} from "react-router";

const Logo = ({className, text}) => {
    const {pathname} =useLocation()
    return (
        <div className={className ? "auth logo" : "logo"} style={pathname === "/" ? {margin: "10vh auto 17px"} : undefined}>
            <h1 className="logo__text">{text}</h1>
            <img src={smile} alt="smile" className="logo__img"/>
        </div>
    )
}
export default Logo