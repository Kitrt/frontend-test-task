import React, {useContext, useLayoutEffect, useState} from "react";
import {useNavigate} from "react-router";

import {GUEST_CONFIG} from "../../constants/users";

import {changeGlobalStore} from "../../utils";

import {useModal} from "../modalProvider";

let AuthContext = React.createContext(GUEST_CONFIG);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    let [user, setUser] = useState(GUEST_CONFIG);

    const modal = useModal();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const getUsers = changeGlobalStore("users");
        const userAction = getUsers.find((user) => user?.auth);
        if (userAction) setUser(() => userAction);
    }, []);

    let signin = (userAuth) => {
        const getUsers = changeGlobalStore("users");

        let newStateUser = getUsers.map((user) => {
            let check = user?.type === userAuth.type && user?.password === userAuth.password;
            if (check) setUser(user);
            user.auth = check;
            return user;
        });

        modal.closeAuthModal();

        changeGlobalStore("users", newStateUser);
        navigate("/");
    };

    let signout = () => {
        const getUsers = changeGlobalStore("users");

        let newStateUser = getUsers.map((user) => {
            user.auth = false;
            return user;
        });

        changeGlobalStore("users", newStateUser);
        setUser(GUEST_CONFIG);
        navigate("/");
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}