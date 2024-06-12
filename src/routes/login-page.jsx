import { observer } from "mobx-react-lite";
import { authStore } from "../store/authStore.js";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

const LoginPage = observer(() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    
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
       
        console.log(password, email);
      const data = {
        token: "token",
      };
      if (data.token) {
        authStore.login(data.token);
        navigate("/protected");
      }
    } catch (error) {
      console.error("Ошибка входа", error);
    }
  };
  
  return (
    <div>
      <div className="page-wrapper">
       
        <div className="login-form">
        <h3>Login Page</h3>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" id="email" value = {email} onChange={(e) => setEmail(e.target.value)}/>

        <label>Password</label>
        <input type="password" placeholder="Enter your password" id="password" value = {password} onChange={(e) => setPassword(e.target.value)} />

        <button  onClick={onLogin}>Log In</button>
    </div>
      </div>
    </div>
  );
});

export default LoginPage
