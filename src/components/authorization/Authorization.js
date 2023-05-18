import React, {useEffect} from "react";
import Logo from "../home/Logo";
import apple from "../../assets/decoration/apple.png";
import grapes from "../../assets/decoration/grapes.png";
import leaf from "../../assets/decoration/leaf.png";
import orange from "../../assets/decoration/orange.png";
import {Outlet, useLocation, useNavigate} from "react-router";

const Authorization = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(()=>{
        if (pathname === "/"){
            navigate('/login')
            return
        }
        if (pathname !== "/login"){
            navigate("/register")
        }else {
            navigate("/login")
        }
    },[])

    return (
        <div className="flex column center" style={{width: "100%"}}>
            <img className="tl-img" src={grapes} alt="img"/>
            <img className="tr-img" src={leaf} alt="img"/>
            <img className="bl-img" src={apple} alt="img"/>
            <img className="br-img" src={orange} alt="img"/>
            <Logo className={true} text="Welcome To Yelp App"/>
            <Outlet/>
        </div>
    )
}

export default Authorization