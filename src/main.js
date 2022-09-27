import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'

const app = createApp(App);
app.use(PrimeVue,{ ripple: true })
app.use(store);
app.use(router).mount('#app');
