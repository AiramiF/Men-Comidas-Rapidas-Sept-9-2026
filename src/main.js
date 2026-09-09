import { createApp } from 'vue'

import { Quasar } from 'quasar'

import 'quasar/dist/quasar.css'

import '@quasar/extras/material-icons/material-icons.css'

import App from './App.vue'

import { router } from './routes/routes'

const app = createApp(App)

app.use(Quasar, {
  plugins: {}
})

app.use(router)

app.mount('#app')