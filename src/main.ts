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
    apiKey: "AIzaSyA7qdLC_C5odY3jTBpPuIy4dej0GKWdvWg",
    authDomain: "vuecrud-7beee.firebaseapp.com",
    projectId: "vuecrud-7beee",
    storageBucket: "vuecrud-7beee.appspot.com",
    messagingSenderId: "455727622544",
    appId: "1:455727622544:web:8f42011f3d92f8330b2b15",
    measurementId: "G-89QFT0Y9PM"
})

export const db = firebase.firestore()
export const auth = firebase.auth()
//  ./ fireStore

/* eslint-disable no-new */
createApp(App).use(store).use(router).component('fa', FontAwesomeIcon).use(firestorePlugin).mount('#app')
