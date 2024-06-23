

import { authStore } from "../store/authStore.js";
import { favoritesStore } from "../store/favoritesStore.js";
import FavoriteButton  from "./favoriteButton.jsx";
import { useState, useMemo } from 'react';



const AnimeCard = ({item}) => {


    function ForFun() {
        let test = authStore.isAuthenticated();
        if (test) {
            return console.log('im here');
        } else {
            return console.log('im not here');
        }
    }

    
    
    // const isFavorite = useMemo(() => {
    //     if(favoritesStore.FavoritesList.includes(item.id)) {
    //         //метод Delete
    //     } else {
    //         //метод Add
    //     }
    // })

    function isFavorite(moveApiId) {
        return favoritesStore.FavoritesList.some(item => moveApiId === item.id);
    }

    function addToFavorite(moveApiId) {
        return favoritesStore.FavoritesList.push(moveApiId);
    }



    return (
        <li key = {item.id} className="card">
        <img src={item.attributes.posterImage.small} loading='lazy' style={{aspectRatio: '142 / 201'}} alt={item.attributes.titles.en_jp} />
        <div className='movie-info-block'>
            <div className='movie-title'><b>{item.attributes.titles.en_jp}</b></div>
            <div className='movie-info'>
                <div className='movie-release'><i>Release Date:</i> {item.attributes.startDate}</div>
                <div className='movie-eposides'><i>Episodes:</i> {item.attributes.episodeCount}</div>
            </div>
        </div>
        <div>
            <FavoriteButton movieId = {item.id}/>
            <div onClick={() => addToFavorite(item.id)}>Click me</div>
            {isFavorite(item.id) && <div>Added to Fav</div>} <div>Not Added to Fav</div>
        </div>
    </li>
    );
}

export default AnimeCard;