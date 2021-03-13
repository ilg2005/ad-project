import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import router from './router/index';
import * as firebase from 'firebase/firebase'
import buy from '@/components/User/BuyModal'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAeisJYlc3f1QxO37asmq8tA69BDFunE2s",
  authDomain: "itc-ads-d6055.firebaseapp.com",
  databaseURL: "https://itc-ads-d6055-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "itc-ads-d6055",
  storageBucket: "itc-ads-d6055.appspot.com",
  messagingSenderId: "206254392371",
  appId: "1:206254392371:web:ceb87cb6562c6a3463cf46"
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit("onSuccessfulLogin");
  }
});

store.dispatch('fetchAds')

new Vue({
  vuetify,
  router,
  store,
  firebase,
  buy,
  render: h => h(App),
}).$mount('#app')



