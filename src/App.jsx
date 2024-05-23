import "./App.css";
import AnimeList from "./components/animeList.jsx";
import {useEffect} from "react";
import {animeStore} from "./store/animeStore.js";
import AnimeActions from "./components/animeActions.jsx";

function App() {

  useEffect(() => {
    animeStore.getAnimeFromServer()
  }, []);

  return (
    <div className="movies-wrapper">
      <h1>Movie List</h1>
      <div className="movie-list">
        <AnimeList></AnimeList>
      </div>
      <AnimeActions/>
    </div>
  );
}

export default App;
