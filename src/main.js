import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from './routers/router.js'
// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(router)
// app.use(vuetify)
app.mount('#app')
