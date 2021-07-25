import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://newsapi.org/v2'
});
newsApi.defaults.params = {}
newsApi.defaults.params['apiKey'] = process.env.REACT_APP_API_KEY;

//Dropping the articles without an image or a title from the list
const cleanArticles = (articles) => {
    return articles.reduce((acc, article) => {
        if (article.urlToImage && article.title) {
            return [...acc, article]
        } else return acc
    }, []);
}

const getTopHeadLines = async (country) => {
    const { data } = await newsApi.get('/top-headlines', { params: { country } });
    console.log(data)
    return cleanArticles(data.articles);
}

const search = async (term) => {
    const { data } = await newsApi.get('/everything', {
        params: {
            q: term, from: "2021-07-07",
            sortBy: "popularity"
        }
    });
    return cleanArticles(data.articles);

}

export  { getTopHeadLines, search}