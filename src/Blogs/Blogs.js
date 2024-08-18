import { useEffect, useState } from "react";
import MyTitle from "../components/MyTitle";
import axios from "axios";
import MyCard from "../components/MyCard";

function Blogs() {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState("food"); // update

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=5bb3f7c3d7c049dea9425d57e5561caa`
      )
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.log(err));
  }, [keyword]); // component did update

  const handleChange = (e) => {
    setKeyword(e.target.value); // onChange
  };

  return (
    <>
      <MyTitle head="Blogs" titleClr={"danger"} />
      <select class="form-select" onChange={(e) => handleChange(e)}>
        <option selected>Open this select menu</option>
        <option value="ai">AI</option>
        <option value="sport">Sport</option>
        <option value="food">Food</option>
        <option value="blockchain">BlockChain</option>
        <option value="development">Development</option>
      </select>
      {articles.map((article) => {
        return <MyCard title={article.title} image={article.urlToImage} />;
      })}
    </>
  );
}

export default Blogs;
