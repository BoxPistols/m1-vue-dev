import { createApp } from 'vue'
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

// const app = createApp(App)
// app.component('font-awesome-icon', FontAwesomeIcon)
// app.use(router)
// app.mount('#app')

createApp(App).use(store).use(router).component('fa', FontAwesomeIcon).mount('#app')
