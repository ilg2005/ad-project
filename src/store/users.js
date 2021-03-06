import firebase from "firebase/firebase";

class User {
    constructor(id) {
        this.id = id
    }
}

export default {
    state: {
        users: [],
    },
    mutations: {
        registerUser(state, payload) {
            state.users.push(payload)
        }
    },
    actions: {
        async registerUser({commit}, payload) {
            commit('clearError')
            commit('setLoading', true)

            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)

                commit('registerUser', new User(user.uid))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async loginUser ({commit}, {email, password}) {
            commit('clearError')
            commit('setLoading', true)
            try {
               await firebase.auth().signInWithEmailAndPassword(email, password)
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        }
    },
        getters: {
            users(state) {
                return state.users
            }
        }
    }
