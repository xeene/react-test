import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoviesCard from "./components/moviesCard.jsx";

function App() {
  const [movies, setMovies] = useState([]);

  // Запрос может быть выполнен либо внутри метода жизненного цикла, если компонент является компонентом класса (???), либо внутри хука React useEffect(), если компонент является функциональным компонентом (?????).


    useEffect(() => {

      function fetchData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiUrl)
        .then(responce => responce.json())
        .then(data => console.log('Data:', data));
      };

      fetchData();

    }, []);
  return (
    <>
      <div className="movies-wrapper">
          <h1>Movie List</h1>
          <div className="movie-list">
            <ul>
              {
                movies.map((movie) => (
                  <li key = {movie.id}>{movie.name}</li>
                ))
              }
            </ul>
          </div>
      </div>
    </>
  )
}

export default App
