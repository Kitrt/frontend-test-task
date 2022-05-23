import React from "react";

import "./index.scss";

function Main({ text }) {
    return (
        <main className="container">
            <h2 className="title">Привет, {text}!</h2>
        </main>
    )
}

export default Main;