export const Auth = {
    authenticate: () => !!localStorage.getItem('authToken'),
    logOut: () => localStorage.removeItem('authToken'),
    logIn: () => localStorage.setItem('authToken', 'test123')
};
