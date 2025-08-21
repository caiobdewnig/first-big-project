import { useState, useEffect } from "react";
import { getMostPopular } from "../api/news";

export default function Aside() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getMostPopular();
            if (data && data.results) {

                const shuffled = [...data.results].sort(() => Math.random() - 0.5);
                
                setNewsList(shuffled.slice(0, 3));
            }
        }
        fetchData();
    }, []);

    return (
        <aside>
            <h2>New</h2>
            {newsList.map((news, idx) => (
                <div key={idx}>
                    <h3>{news.title}</h3>
                    <p>{news.abstract}</p>
                    {idx < newsList.length - 1 && <hr />}
                </div>
            ))}
        </aside>
    );
}