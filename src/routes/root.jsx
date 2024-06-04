import AnimeList from "../components/animeList.jsx";
import AnimeActions from "../components/animeActions.jsx";
import {useEffect} from "react";
import {animeStore} from "../store/animeStore.js";
import { authStore } from '../store/authStore';
import {useNavigate} from "react-router-dom";

const Root = () => {

    const navigate = useNavigate()
    const isLoggedIn = authStore.isAuthenticated();
    const LogOutRedir = () => {
        authStore.logout();
        navigate("/");
    }
    useEffect(() => {
        animeStore.getAnimeFromServer()
    }, []);

    function LoggedState() {
        return <span><a href="/login">Login</a> | <a href="/signup">Register</a></span> 
    }

    const LogOut = () => {
        return (
            <button onClick={LogOutRedir}>Log out</button>
          
        )
    }

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
            <button onClick={() => navigate('protected')}>go to protected page</button>
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