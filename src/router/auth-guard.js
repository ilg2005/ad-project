import store from '../store/users'
export default function (to, from, next) {
    if (store.getters.isLoggedIn) {
        next()
    } else {
        next('/login?loginError=true')

    }
}
