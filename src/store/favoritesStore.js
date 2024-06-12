import { makeAutoObservable } from 'mobx';

class FavoritesStore {

    constructor() {
        makeAutoObservable(this);
    }

    showFavorite() {
        //передать ID пользователя
        //getUserMovies
    }

    addToFavorite() {
        //передать ID фильма и ID пользователя
        try {
            //проверка нет ли такого фильма уже
            //createMovie
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