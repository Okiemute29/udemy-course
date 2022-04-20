import { Link } from "react-router-dom";

// Styling
import "./recipelist.css";

export default function Recipelist({ recipe }) {
  return (
    <div className="recipe-list">
      {recipe.searchResults.map((recipe) => {
        return recipe.results.map((recipee) => {
          return (
            <div className="card">
              {/* {console.log(recipee)} */}
              <h3>{recipee.name}</h3>
              <img src={recipee.image} alt={recipee.name + "image"} />
              {/* {console.log(typeof JSON.stringify(recipee.content))} */}
              {recipee.content && (
                <div> {recipee.content.substring(0, 100)}...</div>
              )}
              <Link to={`/recipe/${recipee.name}`}>Cook This</Link>
            </div>
          );
        });
      })}
    </div>
  );
}
