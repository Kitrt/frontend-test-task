import React from "react";
import {Route, Routes} from "react-router";

import Main from "../common/main";
import News from "../common/news";

function User({user}) {
    return (
        <Routes>
            <Route path="/" element={<Main user={user} text="User"/>}/>
            <Route path="/news" element={<News/>}/>
        </Routes>
    );
}

export default User;