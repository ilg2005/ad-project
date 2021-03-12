import firebase from "firebase/firebase";

class Ad {
    constructor(title, description, ownerId, src = '', promo = false, id = null) {
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
        ads: [],
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        },
        loadAds(state, payload) {
            state.ads = payload
        },
    },
    actions: {
        async updateAd({commit}, payload) {
            commit('clearError')
            commit('setLoading', true)
            try {
                await firebase.database().ref('ads').child(payload.id).update({
                    title: payload.title,
                    description: payload.description
                })
                commit('setLoading', false)
            } catch (e) {
                commit('setLoading', false)
                commit('setError', e.message)
                throw e
            }


        },
        async createAd({commit, getters}, payload) {
            commit('clearError')
            commit('setLoading', true)

            const image = payload.image

            try {
                const newAd = new Ad(
                    payload.title,
                    payload.description,
                    getters.currentUser.uid,
                    '',
                    payload.promo,
                    payload.id
                )
                const ad = await firebase.database().ref('ads').push(newAd)

                await firebase.storage().ref(`ads/${image.name}`).put(image)
                const imageSrc = await firebase.storage().ref(`ads/${image.name}`).getDownloadURL()

                await firebase.database().ref('ads').child(ad.key).update({
                    src: imageSrc
                })
                commit('createAd', {
                    ...newAd,
                    id: ad.key,
                    src: imageSrc
                })
                commit('setLoading', false)

            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }

        },
        async fetchAds({commit}) {
            commit('clearError')
            commit('setLoading', true)

            const resultAds = []

            try {
                const fbVal = await firebase.database().ref('ads').once('value')
                const ads = fbVal.val()
                if (ads) {
                    Object.keys(ads).forEach(key => {
                        const ad = ads[key]
                        resultAds.push(new Ad(
                            ad.title,
                            ad.description,
                            ad.ownerId,
                            ad.src,
                            ad.promo,
                            key
                        ))
                    })

                    commit('loadAds', resultAds)
                }
                commit('setLoading', false)

            } catch (e) {
                commit('setLoading', false)
                commit('setError', e.message)
                throw e
            }
        }
    },
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds(state, getters) {
            return state.ads.filter(ad => {
                return ad.ownerId === getters.currentUser.uid
            })
        }
    }
}
