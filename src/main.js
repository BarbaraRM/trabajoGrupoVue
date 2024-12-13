import { createApp } from 'vue';
import App from './App.vue';
import "./main.css"
import router from './router'; // Import router

createApp(App)
  .use(router) // Use the router
  .mount('#app');