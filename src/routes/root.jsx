import AnimeList from "../components/animeList.jsx";
import AnimeActions from "../components/animeActions.jsx";
import {useEffect} from "react";
import {animeStore} from "../store/animeStore.js";
import {useNavigate} from "react-router-dom";

const Root = () => {

    const navigate = useNavigate()

    useEffect(() => {
        animeStore.getAnimeFromServer()
    }, []);

    return (
        <div className="movies-wrapper">
            <button onClick={() => navigate('protected')}>go to protected page</button>
            <h1>Movie List</h1>
            <div className="movie-list">
                <AnimeList></AnimeList>
            </div>
            <AnimeActions/>
        </div>
    );
};

export default Root;