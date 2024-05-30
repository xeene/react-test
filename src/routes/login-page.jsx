import { observer } from 'mobx-react-lite';
import {authStore} from '../store/authStore.js';
import {useNavigate} from "react-router-dom";

const LoginPage = observer(() => {
    const navigate = useNavigate()

    // const onLogin = async (username, password) => {
    const onLogin = async () => {
        try {
            // const response = await fetch('/api/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ username, password }),
            // });
            // const data = await response.json();
            const data = {
                token: 'token'
            }
            if (data.token) {
                authStore.login(data.token);
                navigate('/protected');
            }
        } catch (error) {
            console.error('Ошибка входа', error);
        }
    };
    return (
        <div>
            <button onClick={onLogin}>Login</button>
        </div>
    );
});

export default LoginPage;