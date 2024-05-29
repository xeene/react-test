import { makeAutoObservable } from 'mobx';
import { jwtDecode } from 'jwt-decode';

class AuthStore {
    token = localStorage.getItem('token');

    constructor() {
        makeAutoObservable(this);
    }

    isAuthenticated() {
        // Проверяем, есть ли токен и не истек ли его срок
        // return !!this.token && !this.isTokenExpired(this.token);
        return !!this.token
    }

    isTokenExpired(token) {
        try {
            const decoded = jwtDecode(token);
            return decoded.exp < Date.now() / 1000;
        } catch (err) {
            return false;
        }
    }

    login(token) {
        this.token = token;
        localStorage.setItem('token', token)
    }

    logout() {
        this.token = null;
        localStorage.removeItem('token')
    }
}

export const authStore = new AuthStore();