import { useParams } from "react-router-dom";

// hooks
import { Usefetch } from "../../hooks/usefetch";

// Styling
import "./recipe.css";

export default function Recipe() {
  const { name } = useParams();
  const { data, ispendding, error } = Usefetch(
    `https://api.spoonacular.com/food/search?query=${name}&number=0&apiKey=73dcf5cddbcc45ca9d67b157b6f99c96`
  );

  return (
    <div className="recipe">
      {ispendding && <h1 className="loading">Loading...</h1>}
      {error && <h3 className="error">{error}</h3>}
      {data &&
        data.searchResults.map((content) => {
          if (content.results.length < 1) {
          } else {
            console.log(content.results[0]);

            return (
              <div key={content.result[0].id}>
                <h2 className="page-title">{content.results[0].name}</h2>
                <p className="method">{content.results[0].content}</p>;
              </div>
            );
          }
        })}
    </div>
  );
}
