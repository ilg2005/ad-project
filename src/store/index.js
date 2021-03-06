import Vue from 'vue'
import Vuex from 'vuex'
import ads from './ads'
import users from './users'
import orders from './orders'
import common from './common'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ads,
        users,
        common,
        orders
    }
})
