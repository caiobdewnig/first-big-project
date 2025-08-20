import { useState, useEffect } from "react";
import { getMostPopular } from "../api/news";
import noImage from "../assets/images/No-Image-Placeholder.svg";


export default function Footer() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getMostPopular();
            if (data && data.results) {
                // Shuffle (embaralhar) o array
                const shuffled = [...data.results].sort(() => Math.random() - 0.5);
                // Pegue as 3 primeiras notícias aleatórias
                setNewsList(shuffled.slice(0, 3));
            }
        }
        fetchData();
    }, []);

    return (
        <div className="footer">
            {newsList.map((news, idx) => (
                <div key={idx}>
                    <img src={news.media && news.media[0] ? news.media[0]['media-metadata'][2].url : noImage} alt="News Image" />
                    <h3>{idx < 10 ? `0${idx+1}` : idx+1}</h3>
                    <h4>{news.title}</h4>
                    <p>{news.abstract}</p>
                </div>
            ))}
        </div>
    );
}