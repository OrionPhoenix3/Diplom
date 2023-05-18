import React from 'react';
import {HashRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import RouterApp from "./router/RouterApp";
import './styles/index.scss';
import {BasketProvider} from "./context/BasketContext";
import {AuthProvider} from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <AuthProvider>
                <Router>
                    <BasketProvider>
                        <RouterApp/>
                    </BasketProvider>
                </Router>
            </AuthProvider>
    </React.StrictMode>
);