import {ADMIN_CONFIG, USER_CONFIG} from "../constants/users";
import {newsCollection} from "../constants/news";

const initStateUsers = [
    ADMIN_CONFIG,
    USER_CONFIG
];

export function setRules() {
    let getUsers = localStorage.getItem("users");
    if (!getUsers) localStorage.setItem("users", JSON.stringify(initStateUsers));
}

export function setNews() {
    let getNews = localStorage.getItem("news");
    if (!getNews) localStorage.setItem("news", JSON.stringify(newsCollection));
}

