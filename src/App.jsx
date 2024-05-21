import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoviesCard from "./components/moviesCard.jsx";
import UserList from "./components/userList.jsx";
import TextDisplay from "./components/Text.jsx";

function App() {

  // return <TextDisplay/>

  const [users, setUsers] = useState([]);

  // Запрос может быть выполнен либо внутри метода жизненного цикла, если компонент является компонентом класса (???), либо внутри хука React useEffect(), если компонент является функциональным компонентом (?????).


    useEffect(() => {

      function fetchData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiUrl)
        .then(responce => responce.json())
        .then(data => {
          setUsers(data);
          console.log('Data:', data)});
      };

      fetchData();

    }, []);
  return (
    <>
      <div className="movies-wrapper">
       
          <h1>Movie List</h1>
          <div className="movie-list">
            {
movies &&
<UserList users={users}></UserList>
            }
          
          </div>
      </div>
    </>
  )


}

export default App
