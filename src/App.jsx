import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoviesCard from "./components/moviesCard.jsx";

function App() {
  const [count, setCount] = useState(0)

  const [moviesList, setMoviewsList] = useState('Nikita')

    useEffect(() => {


    }, []);



  // const moviesList = [
  //     {
  //         id: 1,
  //         name: 'Nikita',
  //         desc: 'best moview'
  //     },
  //     {
  //         id: 2,
  //         name: 'Sveta',
  //         desc: 'not best moview'
  //     }
  // ]

    function fetchMovies() {
        fetch('games.com/api/games', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            apiKey: 'dsadasd2131dasdas'
        }).then(serverData =>  serverData.json()).then(data => {
            setMoviewsList(data.list)
        }).catch()
    }
  return (
    <>
      <div>

          <button onClick={fetchMovies}></button>
      <div className="moviews-wrapper">
          {moviesList.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}
      </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
