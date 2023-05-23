import {useContext, useEffect, memo} from "react";
import {Route} from "react-router-dom";
import Home from "../pages/Home";
import NavPanel from "../components/home/NavPanel";
import Menu from "../pages/Menu";
import Trending from "../pages/Trending";
import Settings from "../pages/Settings";
import Categories from "../components/home/categories/Categories";
import {Navigate, Routes, useLocation, useNavigate} from "react-router";
import PrivateRoute from "./PrivateRoute'";
import {AuthContext} from "../context/AuthContext";
import LoginForm from "../components/form/LoginForm";
import RegisterForm from "../components/form/RegisterForm";
import {LOCAL_STORAGE_USER} from '../utils/localStorageUtils'

const Layout = ({children}) => {
    return (
        <>
            <NavPanel></NavPanel>
            {children}
        </>
    )
}

const RouterApp = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate()
    const {setCurrentUser} = useContext(AuthContext);
    const user = JSON.parse(LOCAL_STORAGE_USER);

    useEffect(() => {
        if (user) {
            setCurrentUser(user)
            if (pathname === "/") {
                navigate("/home")
            } else {
                navigate(pathname)
            }
        } 
    }, [])


    return (
        <>
            <Routes>
                <Route path="/" element={<LoginForm/>}/>
                <Route path="login" element={<LoginForm/>}/>
                <Route path="register" element={<RegisterForm/>}/>

    
                <Route path="home"
                       element={
                        <Layout>
                           <PrivateRoute>
                               <Home/>
                           </PrivateRoute>
                        </Layout>
                       }>
                    <Route path=":categoryId" element={<Categories/>}/>
                </Route>
                
                <Route path="menu"
                       element={
                        <Layout>
                           <PrivateRoute>
                               <Menu/>
                           </PrivateRoute>
                        </Layout>
                       }/>
                <Route path="trending"
                       element={
                        <Layout>
                           <PrivateRoute>
                               <Trending/>
                           </PrivateRoute>
                        </Layout>
                       }/>
                <Route path="/settings"
                       element={
                        <Layout>
                           <PrivateRoute>
                               <Settings/>
                           </PrivateRoute>
                        </Layout>
                       }/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    )
}

export default memo(RouterApp)