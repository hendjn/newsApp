import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import { getTopHeadLines } from '../newsAPI';


function Index() {
    const [news, setNews] = useState([]);
    const [title, setTitle] = useState("Top headlines in the US");
    useEffect(() => {
        const fetchNews = async () => {
            const articles = await getTopHeadLines('us');
            setNews(articles);
        }
        fetchNews();
        return () => {

        }
    }, [])
    //const news = ["one", "two", "three", "one", "two", "three", "one", "two",];
    const gridElements = [];
    const nColumn = 3;
    for (let i = 0; i < Math.ceil(news.length / nColumn); i++) {
        const row = [];
        for (let n = 0; n < nColumn; n++) {
            row.push(
                news[nColumn * i + n] ? <div className="col-sm">
                    <div className="card my-1" style={{ height: "350px", backgroundColor:"#fcf5f5"}}>
                        <img className="card-img-top" style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "250px"
                        }} src={news[nColumn * i + n]?.urlToImage} alt={news[nColumn * i + n]?.title} />
                        <h5 className="card-title m-2">
                            <a href={news[nColumn * i + n]?.url}> {news[nColumn * i + n]?.title} </a>
                        </h5>

                    </div>
                </div> : <div className="col-sm"></div>
            )
        }
        gridElements.push(
            <div className="row">
                {row}
            </div>);

    }
    return (
        <div className="container py-5" style={{minHeight: "100vh"}}>
            <SearchBox setNews={setNews} setTitle={setTitle} />
            <h4 className="m-4">{title}</h4>
            {gridElements}
        </div>
    )
}

export default Index
