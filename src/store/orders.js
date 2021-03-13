import firebase from "firebase/firebase";

class Order {
    constructor(name, phone, adId, done, id = null) {
        this.name = name
        this.phone = phone
        this.adId = adId
        this.done = done
        this.id = id
    }
}


export default {
    state: {
        orders: []
    },
    mutations: {
        createOrder (state, payload) {
            state.orders.push(payload)
        },
        loadOrders(state, payload) {
            state.orders = payload
        },
    },
    actions: {
        async createOrder({commit}, {name, phone, adId, done = false, ownerId}) {
            commit('clearError')
            try {
                await firebase.database().ref(`users/${ownerId}`).push({name, phone, adId, done})
            } catch (e) {
                commit('setError', e.message)
                throw e
            }
        },
        async fetchOrders({commit}, userId) {
            commit('clearError')
            commit('setLoading', true)

            const resultOrders = []

            try {
                const fbVal = await firebase.database().ref(`users/${userId}`).once('value')
                const orders = fbVal.val()
                if (orders) {
                    Object.keys(orders).forEach(key => {
                        const order = orders[key]
                        resultOrders.push(new Order(
                            order.name,
                            order.phone,
                            order.adId,
                            order.done,
                            key
                        ))
                    })
                    commit('loadOrders', resultOrders)
                }
                commit('setLoading', false)

            } catch (e) {
                commit('setLoading', false)
                commit('setError', e.message)
                throw e
            }
        },
        async markOrderDone({commit, getters}, orderId) {
            try {
                commit('clearError')
                await firebase.database().ref(`users/${getters.currentUser.uid}`).child(orderId).update({
                    done: true
                })

            } catch (e) {
                commit('setError', e.message)
                throw e
            }
        }

    },
    getters: {
        doneOrders (state) {
            return state.orders.filter(o => o.done)
        },
        notDoneOrders (state) {
            return state.orders.filter(o => !o.done)
        },
        orders (state, getters) {
            return getters.notDoneOrders.concat(getters.doneOrders)
        }
    }
}
