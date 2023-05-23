import {useEffect} from "react";
import Logo from "../components/home/Logo";
import apple from "../assets/decoration/apple.png";
import grapes from "../assets/decoration/grapes.png";
import leaf from "../assets/decoration/leaf.png";
import orange from "../assets/decoration/orange.png";
 import {useLocation, useNavigate} from "react-router";

export const withAuthorization = (WrappedComponent) => () => {
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
        <div id="authorization-div" className="flex column center">
        <img className="tl-img" src={grapes} alt="img"/>
        <img className="tr-img" src={leaf} alt="img"/>
        <img className="bl-img" src={apple} alt="img"/>
        <img className="br-img" src={orange} alt="img"/>
        <div className="logo-container">
            <h1 className="logo__text">Welcome To</h1>
            <Logo isItAuth={true} text="Yelp App"/>
        </div>
            <WrappedComponent/>
        </div>
        
    )
}