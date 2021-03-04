export default {
    state: {
        users: [],
    },
    mutations: {
        registerUser (state, payload) {
            state.users.push(payload)
        }
    },
    actions: {
        registerUser ({commit}, payload) {
            commit('registerUser', payload)
        }
    },
    getters: {
        user (state) {
            return state.users
        }
    }
}
