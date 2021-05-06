import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Setting Icon
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faUser,
    faSignOutAlt,
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faUser,
    faSignOutAlt,
    faEllipsisV
)

/* eslint-disable no-new */
createApp(App).use(store).use(router).component('fa', FontAwesomeIcon).mount('#app')
