import {createContext} from "react";
import {useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [showLoader, setShowLoader] = useState(false)

    return (
        <AuthContext.Provider value={{currentUser, showLoader, setShowLoader, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
};