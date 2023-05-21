import {NavLink} from "react-router-dom";

const Li = ({img, title, path, isActive}) => {
    return(
        <li className="nav__li">
            <NavLink className={isActive ? "active nav" : 'nav'} to={path}>
                {img}
                <span className="nav__link">{title}</span>
            </NavLink>
        </li>
    )
}
export default Li