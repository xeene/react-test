import axios from "axios";
import { observer } from 'mobx-react-lite';
import { authStore } from '../store/authStore.js';
import { animeStore } from '../store/animeStore.js';
import { favoritesStore } from "../store/favoritesStore.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

//экспериментальная кнопка чтобы разобраться как подключаются компоненты
//как передать animeList? this?

const FavoriteButton = observer(() => {


    const [favorites, setFavorites] = useState([]);

    function toggleFavorites() {
        return (favoritesStore.FavoritesList.includes(item.id)) 
}

    // function isFavoutire() {
    //     //как передать текущий элемент? this?
    //     //передать id текущего пользователя тоже?
    //     const newFavorites = favorites.map(item => {
    //         вызвать здесь addToFav()?
    //       });
      
    //       setFavorites(newFavorites);
    //      
    // }

    return (
        <div>
             <button>{ toggleFavorites ? 'Add' : 'Remove'}</button>
             {/* <button >Add</button> */}
        </div>
    )
});

export default FavoriteButton;