import { observer } from "mobx-react-lite";
import axios from "axios";
import { authStore } from "../store/authStore.js";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const LoginPage = observer(() => {

  const API_URL = import.meta.env.VITE_API_URL;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();


  const configuration = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  };

  const handleSubmit = async () => {
    axios.post(API_URL + '/signin', {
      email,
      password
    }, configuration).
      then(responce => { 
        if (responce.data.token) {
          authStore.login(responce.data.token);
          navigate("/protected");

        }
      }).
      catch(error => { console.error("Ошибка входа", error) })
  }

  return (
    <div>
      <div className="page-wrapper">

        <div className="login-form">
          <h3>Login Page</h3>

          <label>Email</label>
          <input type="email" placeholder="Enter your email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button onClick={handleSubmit}>Log In</button>
        </div>
      </div>
    </div>
  );
});

export default LoginPage
