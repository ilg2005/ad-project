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
        createAd ({commit}, payload) {
            commit('createAd', payload)
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
