import Li from "./home/Li";
import {ReactComponent as HomeImg} from "../assets/menus/home.svg"
import {ReactComponent as MenuImg} from "../assets/menus/menu.svg"
import {ReactComponent as TrendingImg} from "../assets/menus/trending.svg"
import {ReactComponent as SettingImg} from "../assets/menus/setting.svg"
import {useLocation} from "react-router";
import { useState } from "react";

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

    const isPathHome = ({path}) => {
        if (path === "/home") {
            return true;   
        } else {
            return false;
        }
    }

    return (
        <ul className="nav">
            {links.map((link) => <Li key={link.id} isActive={isPathHome(link.path)} {...link}/>)}
        </ul>
    )
}

export default Navigation