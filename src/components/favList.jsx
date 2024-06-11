import { favStore } from "../store/favStore.js";
import { observer } from 'mobx-react-lite';

const FavList = observer(() => {
// Вывод карточки аналогичен выводу на главной - как соединить аниме-лист и фав-лист?
    return (
        <ul className = "movie-list">
            {(favStore.isLoading && !favStore.isError)
                ? <div>Loading...</div>
                : favStore.favList.map((item)=>(
                <li key = {item.id} className="card">
                    {/* Передача атарибутов? */}
                    <img src={item.attributes.posterImage.small} loading='lazy' style={{aspectRatio: '142 / 201'}} alt={item.attributes.titles.en_jp} />
                    <div className='movie-info-block'>
                        <div className='movie-title'><b>{item.attributes.titles.en_jp}</b></div>
                        <div className='movie-info'>
                            <div className='movie-release'><i>Release Date:</i> {item.attributes.startDate}</div>
                            <div className='movie-eposides'><i>Episodes:</i> {item.attributes.episodeCount}</div>
                        </div>
                    </div>
                    <div>
                        <button>Удалить</button>
                    </div>
                </li>
            ))
            }
            {favStore.isError ? <div>{favStore.errorText}</div> : null}
        </ul>
    );
})

export default FavList;