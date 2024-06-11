import { makeAutoObservable } from 'mobx';

class FavStore {

    constructor() {
        makeAutoObservable(this);
    }

    showFav() {
        //передать ID пользователя
        //getUserMovies
    }

    addToFav() {
        //передать ID фильма и ID пользователя
        try {
            //проверка нет ли такого фильма уже
            //createMovie
        } catch {
            //фильм уже добавлен
        }
        
    }

    delFromFav() {
        //передать ID фильма и пользователя
        try {
            //проверка добавлен ли фильм
            //deleteMovie
        } catch {
            //фильм не добавлен 
        }
        
    }

}

export const favStore = new FavStore();