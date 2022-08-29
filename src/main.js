import { createApp } from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyBUzFG4qcqkRREZb6Xe3LcVuBCvsHr2_a4',
  authDomain: 'vue-crm-1aab7.firebaseapp.com',
  projectId: 'vue-crm-1aab7',
  storageBucket: 'vue-crm-1aab7.appspot.com',
  messagingSenderId: '46542413238',
  appId: '1:46542413238:web:51990edeff21e196907517',
  measurementId: 'G-P6CGV26BGL'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(Vuelidate).use(store).use(router).mount('#app')
  }
})
