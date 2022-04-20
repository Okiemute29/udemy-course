import { BrowserRouter, Routes, Route } from "react-router-dom";

// page component
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import Create from "./pages/create/create";
import Search from "./pages/search/search";
import Recipe from "./pages/recipe/recipe";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
