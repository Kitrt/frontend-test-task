import React, {useEffect, useRef, useState} from "react";

import "./index.scss";

import {useAuth} from "../authProvider";
import {useModal} from "../modalProvider";

function Auth() {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);

    const dialogRef = useRef(null);

    const auth = useAuth();
    const modal = useModal();

    useEffect(() => {
        if (modal.dialog && dialogRef?.current?.showModal) dialogRef?.current?.showModal();
        if (!modal.dialog && dialogRef?.current?.close) dialogRef?.current.close();
    }, [modal.dialog]);

    const sendData = () => {
        if (!login || !pass) {
            setError(true);
            return null;
        }
        auth.signin({type: login, password: pass});
    }

    return (
        <dialog ref={dialogRef} className="auth">
            <div onClick={modal.closeAuthModal} className="auth__close">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z" fill="black"/>
                </svg>
            </div>
            <div className="auth__container">
                <div className="auth__title">Войти.</div>
                <div className="auth__elem">
                    <input type="text"
                           name="login"
                           onChange={(ev) => setLogin(ev?.target?.value)}
                           placeholder="Логин"
                           className={`auth__inp ${error ? "auth__inp--error" : ""}`}/>
                </div>
                <div className="auth__elem">
                    <input type="text"
                           name="pass"
                           onChange={(ev) => setPass(ev?.target?.value)}
                           placeholder="Пароль"
                           className={`auth__inp ${error ? "auth__inp--error" : ""}`}/>
                </div>
                <button onClick={sendData} className="auth__btn">Войти</button>
            </div>
        </dialog>
    )
}

export default Auth;