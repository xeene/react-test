import { makeAutoObservable } from 'mobx';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

class FavoritesStore {

    constructor() {
        makeAutoObservable(this);
    }


    FavoritesList = [];

    showFavorite(token) {
        //передать ID пользователя
        //getUserMovies

        
            axios.get(API_URL + '/movies', {    
                headers: {
                    Authorization: `Bearer ${token}`,  
                  }
            }).
            then((responce) => {
            console.log('ok');
            }).catch((response) =>
            console.log('not ok'));
    }

    isFavoritesCheck(){

    }

    addToFavorite(movieId) {
        //передать ID фильма и ID пользователя
        try {
            //проверка нет ли такого фильма уже
            //createMovie
            axios.post(API_URL + '/movies', {
                movieId,
                headers: {
                    Authorization: `Bearer ${token}`,  
                  }
            }).then(
                (responce) => {
                    this.FavoritesList.push(movieId),
                    console.log(movieId)
                }
            )
            
        } catch {
            //фильм уже добавлен
        }
        
    }

    deleteFromFavorite() {
        //передать ID фильма и пользователя
        try {
            //проверка добавлен ли фильм
            //deleteMovie
        } catch {
            //фильм не добавлен 
        }
        
    }

}

export const favoritesStore = new FavoritesStore();