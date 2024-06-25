import { makeAutoObservable } from 'mobx';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
var token = localStorage.getItem('token');


class FavoritesStore {

    constructor() {
        makeAutoObservable(this);
    }
     

    FavoritesList = [];
    

    async showFavorite() {      
           await axios.get(API_URL + '/movies', {    
                headers: {
                    Authorization: `Bearer ${token}`,  
                  }
            }).
            then((responce) => {            
            this.FavoritesList = responce.data;
            // console.log(responce.data);
            // console.log(this.FavoritesList);
            }).catch((error) =>
            console.log(error));
    }

    isFavoritesCheck(movieApiId){
        return (this.FavoritesList.includes(movieApiId))
    }

    addToFavorite(movieApiId, name) {
        const configuration = {
            headers: {
                 Authorization: `Bearer ${token}`,
            },
        };
        try {
            axios.post(API_URL + '/movies', {
                movieApiId, name
            }, configuration).then(
                (responce) => {
                    this.FavoritesList.push(movieApiId)
                    // console.log(responce);
                    // console.log(this.FavoritesList);
                }
            )
            
        } catch {
            //фильм уже добавлен
        }
        
    }

    //Пока не работает
    // deleteFromFavorite(movieApiId) {
    //     const configuration = {
    //         headers: {
    //              Authorization: `Bearer ${token}`,
    //         },
    //     };
    //     //передать ID фильма и ID пользователя
    //     try {
    //         axios.delete(API_URL + `movies/${movieApiId}`, configuration).then(
    //             (responce) => {
    //                 this.FavoritesList.delete(movieApiId)
    //             }
    //         )
            
    //     } catch {
    //         //фильм уже добавлен
    //     }
        
    // }

}

export const favoritesStore = new FavoritesStore();