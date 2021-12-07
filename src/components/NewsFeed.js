import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
        "x-rapidapi-key": "77781d9952msh652064533e934a7p1c14d8jsn17b5c44455c4",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(articles);

  const first14Articles = articles?.slice(0, 14);

  return (
    <div className="news-feed">
      <h1>NewsFeed</h1>
      {first14Articles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url}>
            <p>{article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
