import React, {useState} from "react";

import "./index.scss";

import {nanoid} from "../../../../utils";

function ChangeNewsForm({ addNews }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [error, setError] = useState(false);

    const sendNews = () => {
        if (!title && !text) {
            setError(true);
            return null;
        }

        setError(false);
        addNews({id: Number(nanoid()), title, body: text, date: new Date(), show: false});
    }

    return (
        <section className="news-create">
            <div className="news-create__title">Создать новость.</div>
            <div className="news-create__block">
                <input
                    type="text"
                    name="title"
                    onChange={(ev) => setTitle(ev?.target?.value)}
                    placeholder="Заголовок"
                    className={`news-create__inp ${error ? "news-create__inp--error" : ""}`}/>
            </div>
            <div className="news-create__block">
                <textarea name="text"
                          onChange={(ev) => setText(ev?.target?.value)}
                          placeholder="Текст"
                          className={`news-create__txt ${error ? "news-create__txt--error" : ""}`}></textarea>
            </div>
            <button onClick={sendNews} className="news-create__btn">Сохранить</button>
        </section>
    )
}

export default ChangeNewsForm;