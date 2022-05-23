import React from "react";
import {Route, Routes} from "react-router";

import Main from "../common/main";
import News from "../common/news";

function Admin({user}) {
    return (
        <Routes>
            <Route path="/" element={<Main user={user} text="Admin"/>}/>
            <Route path="/news" element={<News/>}/>
        </Routes>
    );
}

export default Admin;