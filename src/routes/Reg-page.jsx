import { observer } from 'mobx-react-lite';
import {authStore} from '../store/authStore.js';
import {useNavigate} from "react-router-dom";

const RegisterPage = observer(() => {
    return (
        <div>
            <h1>Register Page</h1>
        </div>
    )
});

export default RegisterPage;
