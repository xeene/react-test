import axios from "axios";
import { observer } from 'mobx-react-lite';
import {authStore} from '../store/authStore.js';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';

const RegisterPage = observer(() => {

    const API_URL = import.meta.env.API_URL;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);

    const navigate = useNavigate(); 

    const onReg = async () => {


        const configuration = {
            method: "POST",
            headers: {
                //'Access-Control-Allow-Origin': '*'
                    },
            url: API_URL + "/signup",
            data: { 
                name,
                email,
                password
            },
        };
    
        axios(configuration)
        .then((result) => {
            setRegister(true);
            const data = {
                token: "token",
              };
              if (data.token) {
                authStore.login(data.token);
                navigate("/protected");
              }
            // console.log(result);
        })
        .catch((error) => {
            console.log(error);
            console.error("Ошибка регистрации", error);
        })
    }

    return (
        <div>
      <div className="page-wrapper">
       
        <div className="login-form">
        <h3>Register Page</h3>

        <label>Name</label>
        <input type="text" placeholder="Enter your email" id="name" value = {name} onChange={(e) => setName(e.target.value)}/>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" id="email" value = {email} onChange={(e) => setEmail(e.target.value)}/>

        <label>Password</label>
        <input type="password" placeholder="Enter your password" id="password" value = {password} onChange={(e) => setPassword(e.target.value)} />

        <button  onClick={onReg}>Register</button>
    </div>
      </div>
    </div>
    )
})

export default RegisterPage;
