import React from "react";
import Li from "../components/home/Li";
import {ReactComponent as HomeImg} from "../assets/menus/home.svg"
import {ReactComponent as MenuImg} from "../assets/menus/menu.svg"
import {ReactComponent as TrendingImg} from "../assets/menus/trending.svg"
import {ReactComponent as SettingImg} from "../assets/menus/setting.svg"
import {useLocation} from "react-router";

const links = [
    {
        id: 1,
        path: "/home",
        img: <HomeImg className="nav__img"/>,
        title: "Home",
    },
    {
        id: 2,
        path: "/menu",
        img: <MenuImg className="nav__img"/>,
        title: "Menu"
    },
    {
        id: 3,
        path: "/trending",
        img: <TrendingImg className="nav__img"/>,
        title: "Trending"
    },
    {
        id: 4,
        path: "/settings",
        img: <SettingImg className="nav__img"/>,
        title: "Settings"
    }
]

const Navigation = () => {
    const {pathname} = useLocation()

    const home = (path) => {
        if (path === "/home") {
            switch (pathname) {
                case "/home":
                    return true;
                case "/home/all":
                    return true;
                case "/home/burger":
                    return true;
                case "/home/pizza":
                    return true;
                case "/home/salads":
                    return true;
                case "/home/donuts":
                    return true;
                case "/home/drinks":
                    return true;
                default:
                    return false;
            }
        }
    }

    return (
        <ul className="nav">
            {links.map((link) => <Li key={link.id} isActive={home(link.path)} {...link}/>)}
        </ul>
    )
}

export default Navigation