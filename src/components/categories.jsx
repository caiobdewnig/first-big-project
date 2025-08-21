import { getMostPopular } from "../api/news";
import { useEffect, useState } from "react";
import noImage from "../assets/images/No-Image-Placeholder.svg";

export default function Categories() {
    const [news, setNews] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getMostPopular();
            if (data) setNews(data.results);
        }
        fetchData();
    }, []);

    const possibleCategories = [...new Set(news.map(item => item.section))];

    return (
        <>
            <h1>Categories Page</h1>
            <p>Select a category that pleases you!</p>
            {possibleCategories.map((category, idx) => (
                <button key={idx} onClick={() => setSelectedCategory(category)}>
                    {category}
                </button>
            ))}

            {selectedCategory && (
                <div>
                    <h2>{selectedCategory}</h2>
                    {news
                        .filter(item => item.section === selectedCategory)
                        .map(item => (
                            <div key={item.id} className="category-item">
                                <img src={item.media && item.media[0] ? item.media[0]['media-metadata'][2].url : noImage} alt="News Image" className="news-image-category"/>
                                <h3>{item.title}</h3>
                                <p>{item.abstract}</p>
                            </div>
                        ))
                    }
                </div>
            )}
        </>
    );
}