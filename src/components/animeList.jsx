import { animeStore } from "../store/animeStore.js";
import { observer } from 'mobx-react-lite';

const AnimeList = observer(() => {

    return (
        <ul className = "movie-list">
            {(animeStore.isLoading && !animeStore.isError)
                ? <div>Loading...</div>
                : animeStore.animeList.map((item)=>(
                <li key = {item.id} className="card">
                    <img src={item.attributes.posterImage.small} loading='lazy' style={{aspectRatio: '142 / 201'}} alt={item.attributes.titles.en_jp} />
                    <div className='movie-info-block'>
                        <div className='movie-title'><b>{item.attributes.titles.en_jp}</b></div>
                        <div className='movie-info'>
                            <div className='movie-release'><i>Release Date:</i> {item.attributes.startDate}</div>
                            <div className='movie-eposides'><i>Episodes:</i> {item.attributes.episodeCount}</div>
                        </div>
                    </div>
                </li>
            ))
            }
            {animeStore.isError ? <div>{animeStore.errorText}</div> : null}
        </ul>
    );
})

export default AnimeList;