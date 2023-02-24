import React, {useEffect, useState} from "react";
import Router from './router/Router';

const App = () => {
    const [articles, setArticles] = useState([]);
    const apiKey = "f8f9b3e9a20a4bf8a37f702a99f59899";
  
    useEffect(() => {
      fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then((res) => res.json())
        .then((data) => setArticles(data.articles))
        .catch(
          (error) =>
            `There was an error fetching the data from the API. Details: ${error}`
        );
    }, []);
  
    console.log(articles);
  
    return (
        <Router />
    );
  };

  export default App;