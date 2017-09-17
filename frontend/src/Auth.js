import axios from 'axios';

const baseUrl = 'http://localhost:8000/';
axios.defaults.headers = {'Content-Type': 'application/json'};

export const Auth = {
    authenticate: () => !!window.localStorage.getItem('authToken'),
    logOut: () => {
        axios.post(`${baseUrl}logout`, {})
            .then(() => {
                window.localStorage.removeItem('authToken');
                window.location.href = '/form'
            })
    },
    logIn: (login="admin", password="admin") => {
        axios.post(`${baseUrl}login`, {login, password})
            .then((response) => {
                window.localStorage.setItem('authToken', response);
                window.location.href = '/dashboard'}
            )
            .catch(err => console.error(err))
    }
};