import { favoritesStore } from "../store/favoritesStore.js";
import { observer } from 'mobx-react-lite';

const FavoritesList = observer(() => {

 
    return (
        <ul className = "movie-list">
            { favoritesStore.FavoritesList.map((item)=>(
                <li key = {item.id} className="card">
                                     
                    <div className='movie-info-block'>
                        <div className='movie-title'><b>{item.name}</b></div>

                    </div>
                    <div>
                        {/* <button onClick={DeleteMovie(item.id)}>Удалить</button> */}
                    </div>
                </li>
            ))
            }
        </ul>
    );
})

export default FavoritesList;