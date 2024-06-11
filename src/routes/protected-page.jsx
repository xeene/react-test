import { observer } from "mobx-react-lite";
import { authStore } from "../store/authStore.js";
import { animeStore} from "../store/animeStore.js";
// import {favsStore} from "../store/favsStore.js";


const ProtectedPage = () => {
    return (
        <div>Это защищённая страница, доступная только авторизованным пользователям.</div>
    );
};

export default ProtectedPage;