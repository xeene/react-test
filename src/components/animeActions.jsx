import {animeStore} from "../store/animeStore.js";

const AnimeActions = () => {

    function cleanStore() {
        animeStore.cleanAnimeList();
    }

    function setError() {
        animeStore.setError('user custom error')
    }

    return (
        <div style={{display: 'flex', gap: 8,}}>
            <button onClick={cleanStore}>Clean anime</button>
            <button onClick={setError}>Set user error</button>
        </div>
    );
};

export default AnimeActions;