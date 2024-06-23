import { animeStore } from "../store/animeStore.js";
import { favoritesStore } from "../store/favoritesStore.js";
import { observer } from 'mobx-react-lite';
import FavoriteButton  from "./favoriteButton.jsx"
import AnimeCard  from "./animeCard.jsx"

const AnimeList = observer(() => {

    return (
        <ul className = "movie-list">
            {(animeStore.isLoading && !animeStore.isError)
                ? <div>Loading...</div>
                : animeStore.animeList.map((item)=>(
                    <AnimeCard item={item}></AnimeCard>
            ))
            }
            {animeStore.isError ? <div>{animeStore.errorText}</div> : null}
        </ul>
    );
})

export default AnimeList;