import React from "react";
import {NavLink} from "react-router-dom";

const CategoryBtn = ({img, title, path, id, setFilterName}) => {
    return(
        <li className="category__li">
            <NavLink className="category" to={"/home" + path} onClick={() => setFilterName(title)}>
                <img src={img} alt="icon" className={`category__img${id}`}/>
                <span className="category__link">{title}</span>
            </NavLink>
        </li>
    )
}
export default CategoryBtn