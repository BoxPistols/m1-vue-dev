import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// icon
import "./icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Setting fireStore
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID,
})

export const db = firebase.firestore()
export const auth = firebase.auth()
//  ./ fireStore

/* eslint-disable no-new */
createApp(App).use(store).use(router).component('fa', FontAwesomeIcon).use(firestorePlugin).mount('#app')
