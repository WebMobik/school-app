import { signout } from './user-api'

const auth = {
    isAuthenticate() {
        if (typeof window === undefined)
            return false

        const getSession = sessionStorage.getItem('token');
        const getUser = sessionStorage.getItem('user');
        if (getSession)
            return {
                session: JSON.parse(getSession),
                user: JSON.parse(getUser),
            }
        else
            return false
    },
    authenticate({ token, user }) {
        if (typeof window !== undefined) {
            sessionStorage.setItem('token', JSON.stringify(token))
            sessionStorage.setItem('user', JSON.stringify(user))
        }
    },
    getUser() {
        const user = sessionStorage.getItem('user')
        return JSON.parse(user)
    },
    clearJWT() {
        if (typeof window !== undefined)
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('user')
        signout().then(() => {
            document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        })
    }
}

export default auth