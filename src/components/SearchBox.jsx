import React, { useState } from 'react'
import { search } from '../newsAPI';

function SearchBox({ setNews, setTitle }) {
    const [term, setTerm] = useState("");
    const searchOnNews = async (e) => {
        e.preventDefault();
        const articles = await search(term);
        setNews(articles);
        setTitle(`Search results for ${term}:`)
    }
    return (
        <form class="form-row align-items-center" onSubmit={searchOnNews}>
            <div  style={{ width: "80%", display: "inline-block" }}>
                <input type="text" className="form-control" placeholder="category,topic or title..."
                    onChange={e => setTerm(e.target.value)} style={{backgroundColor:"#fcf5f5"}} />
            </div>
            <input type="submit" className="btn btn-dark mx-2 mb-1" style={{ backgroundColor: "#023f73", height: "40px", borderBlockColor: "#052f57" }} value="Search" />
        </form>
    )
}

export default SearchBox;
