import React, {useLayoutEffect, useRef, useState} from "react";

import "./index.scss";

import ChangeNewsForm from "./ChangeNewsForm";

import {useAuth} from "../../authProvider";

import {changeGlobalStore} from "../../../utils";

function News() {
    const [news, setNews] = useState([]);
    const newsState = useRef([]);

    let auth = useAuth();

    useLayoutEffect(() => {
        const getNews = changeGlobalStore("news");
        if (getNews) {
            newsState.current = getNews;
            setNews(newsState.current);
        }
    }, []);

    const searchNews = (search) => {
        setNews(() => newsState?.current.filter((item) => {
            return !item?.title.search(search);
        }));
    }

    const addNews = (newNews) => {
        newsState.current = [...news, newNews];
        setNews((prevState) => [...prevState, newNews]);
        changeGlobalStore("news", newsState.current);
    }

    const deleteNews = (id) => {
        newsState.current = newsState.current.filter((item) => item?.id !== id);
        setNews(newsState.current);
        changeGlobalStore("news", newsState.current);
    }

    const setShowNews = (id) => {
        newsState.current = newsState.current.map((item) => {
            if (item?.id === id) item.show = true;
            return item;
        });
        setNews(() => [...newsState.current]);
        changeGlobalStore("news", newsState.current);
    }

    return (
        <main className="container">
            <section className="filter">
                <input type="text"
                       name="search"
                       onChange={(ev) => searchNews(ev?.target?.value)}
                       placeholder="Пооиск..."
                       className="filter__inp"/>
            </section>

            {auth?.user?.action?.create && <ChangeNewsForm addNews={addNews}/>}

            <section className="news">
                {news.map((item) => {
                    if (!item?.show && !auth?.user?.action?.moderate && !auth?.user?.auth) return null;
                    return (
                        <div key={item?.id} className="news__item">
                            <div className="news__title">{item?.title}</div>
                            <div className="news__content">{item?.body}</div>
                            <div className="news__date">{new Date(item?.date).toLocaleDateString()}</div>
                            {auth?.user?.action?.moderate &&
                                <div className="news__action">
                                    {!item?.show &&
                                        <button onClick={() => setShowNews(item?.id)} className="news__btn">Одобрить</button>
                                    }
                                    <button onClick={() => deleteNews(item?.id)} className="news__btn">Удалить</button>
                                </div>
                            }
                        </div>
                    )
                })}
            </section>
        </main>
    )
}

export default News;