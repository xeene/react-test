import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MoviesCard from "./components/moviesCard.jsx";
import AnimeList from "./components/animeList.jsx";
import UserList from "./components/userList.jsx";
import TextDisplay from "./components/Text.jsx";

function App() {
  // return <TextDisplay/>
  const [anime, setAnime] = useState([]);

 
  useEffect(() => {
    function fetchData() {
      const apiUrl = "https://kitsu.io/api/edge/anime";
      fetch(apiUrl, {
        'Accept': "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      })
        .then((responce) => responce.json())
        .then((data) => {
          setAnime(data.data);
          // console.log("Data:", data);
          // console.log("Data.Date:", data.data);
        });
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="movies-wrapper">
        <h1>Movie List</h1>
        <div className="movie-list">
          <AnimeList anime={anime}></AnimeList>
        </div>
      </div>
    </>
  );
}

export default App;
