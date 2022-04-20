import { Usefetch } from "../../hooks/usefetch";

// components
import Recipelist from "../../components/recipelist";

// Styling
import "./home.css";

export default function Home() {
  const { data, ispendding, error } = Usefetch(
    "https://api.spoonacular.com/food/search?query=apple&number=2&apiKey=73dcf5cddbcc45ca9d67b157b6f99c96"
  );
  // data &&
  //   data.searchResults.map((item) => {
  //     return item.results.map((items) => {
  //       return items.id;
  //     });
  //   });
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {ispendding && <p className="loading">Loading...</p>}
      {data && <Recipelist recipe={data} />}
    </div>
  );
}
