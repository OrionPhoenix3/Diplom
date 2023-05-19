import React from "react";

const BurgerBtn = ({isActive, onClick}) => {

    return (
        <div id="burger-nav" className={`burger-btn ${isActive ? "active-btn" : "disable-btn"}`} onClick={onClick}>
            <span className="hr line-top"/>
            <span className="hr line-center"/>
            <span className="hr line-bottom"/>
        </div>
    )
}

export default BurgerBtn