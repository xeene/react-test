import { observer } from "mobx-react-lite";
import { authStore } from "../store/authStore.js";
import { favoritesStore } from "../store/favoritesStore.js";
import { NavLink } from "react-router-dom";
import FavoritesList from "../components/favoritesList.jsx";


const ProtectedPage = observer(() => {
    console.log('------------------------------');
 console.log(favoritesStore.FavoritesList);
 
    return (
        <div><div><NavLink to="/">На главную</NavLink></div>
            <div>
                <ul className="movie-list">
                    {favoritesStore.FavoritesList.map((item) => (
                        <FavoritesList item={item}></FavoritesList>
                    ))
                    }
                </ul>
            </div>
        </div>
    );
});

export default ProtectedPage;