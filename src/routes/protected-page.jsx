import { observer } from "mobx-react-lite";
import { authStore } from "../store/authStore.js";
import { animeStore} from "../store/animeStore.js";
import { favoritesStore } from "../store/favoritesStore.js";
import { NavLink } from "react-router-dom";


const ProtectedPage = () => {
    return (
        <div><div><NavLink to ="/">На главную</NavLink></div>
            Это защищённая страница, доступная только авторизованным пользователям.</div>
    );
};

export default ProtectedPage;