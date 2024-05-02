import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);
if (process.env.NODE_ENV === 'production') {
  import('./css/build.css').then(() => {
    app.mount('#app');
  });
} else {
  import('./css/output.css').then(() => {
    app.mount('#app');
  });
}

