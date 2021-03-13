import firebase from "firebase/firebase";

export default {
    state: {
        orders: []
    },
    mutations: {
        createOrder (state, payload) {
            state.orders.push(payload)
        }
    },
    actions: {
        async createOrder({commit}, {name, phone, adId, ownerId}) {
            commit('clearError')
            try {
                await firebase.database().ref(`users/${ownerId}`).push({name, phone, adId})
                commit('setLoading', false)
            } catch (e) {
                commit('setError', e.message)
                throw e
            }

        }
    },
    getters: {
        orders (state) {
            return state.orders
        }
    }
}
