import { createApp, App } from 'vue'
import Default from './App.vue'
import router from "@/router";

const app: App = createApp(Default)

app.use(router)

app.mount('#app')
