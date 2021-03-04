import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import router from './router/index';
import * as firebase from 'firebase/firebase'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAeisJYlc3f1QxO37asmq8tA69BDFunE2s",
  authDomain: "itc-ads-d6055.firebaseapp.com",
  projectId: "itc-ads-d6055",
  storageBucket: "itc-ads-d6055.appspot.com",
  messagingSenderId: "206254392371",
  appId: "1:206254392371:web:ceb87cb6562c6a3463cf46"
});


new Vue({
  vuetify,
  router,
  store,
  firebase,
  render: h => h(App),
}).$mount('#app')

