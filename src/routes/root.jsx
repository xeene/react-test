import AnimeList from "../components/animeList.jsx";
import AnimeActions from "../components/animeActions.jsx";
import {useEffect} from "react";
import {animeStore} from "../store/animeStore.js";
import { authStore } from '../store/authStore';
import {useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom";
import { favoritesStore } from "../store/favoritesStore.js";

const Root = () => {

    const navigate = useNavigate()
    const isLoggedIn = authStore.isAuthenticated();
    const LogOutRedir = () => {
        authStore.logout();
        navigate("/");
    }
    useEffect(() => {
        animeStore.getAnimeFromServer()
        favoritesStore.showFavorite();
    }, []);

    function LoggedState() {
        return <span><NavLink to="/login">Login</NavLink> | <NavLink to="/signup">Register</NavLink></span>
    }

    const LogOut = () => {
        return (
            <div>
                <NavLink onClick={() => navigate('protected')}>MY PAGE</NavLink> | <NavLink onClick={LogOutRedir}>Log out</NavLink>
            </div>
          
        )
    }

    console.log(favoritesStore.FavoritesList);

    return (
        <div>
            <header className = "header">
                <div className = "left-header"></div>
                <div className = "central-header"></div>
                <div className = "right-header">
                    {isLoggedIn ? <LogOut/> : <LoggedState/>}
              
                </div>
            </header>
            <div className="page-wrapper">
            
            <h1 className="page-title">Movie List</h1>
            <div className="movie-list">
                <AnimeList></AnimeList>
            </div>
            <AnimeActions/>
        </div>
            <footer className = "footer">
                I'm footer
            </footer>
        </div>
    );
};

export default Root;