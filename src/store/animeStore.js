import { makeAutoObservable } from 'mobx';

class AnimeStore {
    animeList = [];
    isLoading = false;
    isError = false
    errorText = null;

    constructor() {
        makeAutoObservable(this);
    }

    async getAnimeFromServer() {
        const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL || 'https://kitsu.io/api';
        const apiUrl = `${baseUrl}/edge/anime`;
        try {
            const fetchedData = await fetch(apiUrl, {
                'Accept': "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json",
            })
            const dataInJson = await fetchedData.json();
            this.animeList = dataInJson.data;
            this.isError = false
        } catch (error) {
            console.log(error)
            this.isError = true
            this.errorText = error.data
        } finally {
            this.isLoading = false
        }
    }

    cleanAnimeList() {
        this.animeList = [];
    }

    cleanError() {
        this.isError = false
        this.errorText = null
    }

    setError(errorText) {
        this.isError = true
        this.errorText = errorText
    }
}

export const animeStore = new AnimeStore();