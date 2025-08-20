import { useEffect, useState } from "react";
import { getMostPopular } from "../api/news";
import noImage from "../assets/images/No-Image-Placeholder.svg";

export default function ImportantNew() {
    const isMobile = window.innerWidth <= 768;
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const data = await getMostPopular();
        if (data) setNews(data.results[0]);
        }
        fetchData();
    }, []);



    return (
        <>
            <img
                src={news.media && news.media[0] ? news.media[0]['media-metadata'][2].url : noImage}
                alt={isMobile ? "Web-Mobile" : "Web-Desktop"}
                className={isMobile ? "web-mobile" : "web-desktop"}
            />
            <h1>{news.title}</h1>
            <p>{news.abstract}...</p>
            <button>Read more</button>
        </>
    );
}