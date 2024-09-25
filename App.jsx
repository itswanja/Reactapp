import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./assets/search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=12823d7a";

const movie1 = {
  Title: "Blacklist",
  Year: "2019",
  imdbID: "tt9892494",
  Type: "series",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjRmMGE1YTctNTkyNC00ZjQwLTk3ZTEtYzgxNTc5NTNlMWJmXkEyXkFqcGdeQXVyMzcyMDg3ODE@._V1_SX300.jpg",
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Blacklist");
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
