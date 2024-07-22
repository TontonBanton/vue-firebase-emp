import { createApp } from 'vue'
import App from './App.vue'
import router from './router'     // Import the router

// Create and mount the Vue app
const app = createApp(App)
app.use(router)                   // Install the router
app.mount('#app')

