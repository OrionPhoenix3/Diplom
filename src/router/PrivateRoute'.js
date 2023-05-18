import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {Navigate} from "react-router";

const PrivateRoute = ({children}) => {
    let {currentUser} = useContext(AuthContext);

    if (currentUser === null) {
        return <Navigate to="/"/>
    }
    return children
}
export default PrivateRoute