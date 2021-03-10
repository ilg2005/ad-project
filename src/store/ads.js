import firebase from "firebase/firebase";

class Ad {
    constructor (title, description, ownerId, src = '', promo = false, id = null) {
        this.title = title
        this.description = description
        this.ownerId = ownerId
        this.src = src
        this.promo = promo
        this.id = id
    }
}

export default {
    state: {
        ads: [
            {
                id: '1',
                title: 'First ad',
                description: 'First description',
                promo: false,
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            },
            {
                id: '2',
                title: 'Second ad',
                description: 'Second description',
                promo: true,
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
                id: '3',
                title: 'Third ad',
                description: 'Third description',
                promo: true,
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
                id: '4',
                title: 'Fourth ad',
                description: 'Fourth description',
                promo: false,
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
        ],
    },
    mutations: {
        createAd (state, payload) {
           state.ads.push(payload)
        }
    },
    actions: {
        async createAd ({commit, getters}, payload) {
            commit('clearError')
            commit('setLoading', true)

          //  commit('createAd', payload)
            try {
                const newAd = new Ad(
                    payload.title,
                    payload.description,
                    getters.currentUser.uid,
                    payload.imageSrc,
                    payload.promo,
                    payload.id
                )
                const ad = await firebase.database().ref('itc-ads-d6055-default-rtdb').push(newAd)
                console.log(ad)
                commit('createAd', {
                    ...newAd,
                    id: ad.key
                })
                commit('setLoading', false)

            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }

        }
    },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds (state) {
            return state.ads
        }
    }
}
