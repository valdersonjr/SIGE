export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('access_token');
}
