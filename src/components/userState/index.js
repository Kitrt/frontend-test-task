import React from "react";

import Admin from "../admin";
import User from "../user";
import Guest from "../guest";

import {useAuth} from "../authProvider";

function UserState() {
    let auth = useAuth();

    const userByType = {
        user: User,
        admin: Admin,
        guest: Guest
    }

    const CurrentUser = userByType[auth?.user?.type];

    return <CurrentUser/>;
}

export default UserState;