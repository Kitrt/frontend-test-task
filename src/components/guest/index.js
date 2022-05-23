import React from "react";
import {Route, Routes} from "react-router";

import Main from "../common/main";
import News from "../common/news";
import Auth from "../auth";

function Guest({user}) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main user={user} text="Гость"/>}/>
                <Route path="/news" element={<News/>}/>
            </Routes>
            <Auth/>
        </>
    );
}

export default Guest;