import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import "./index.scss";

import App from './components/app';

import {setNews, setRules} from "./initPage";

import {ModalProvider} from "./components/modalProvider";
import {AuthProvider} from "./components/authProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ModalProvider>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </ModalProvider>
        </BrowserRouter>
    </React.StrictMode>
);

setRules();
setNews();
