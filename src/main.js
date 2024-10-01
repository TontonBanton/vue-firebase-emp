import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

let app = null;
const auth = getAuth();
onAuthStateChanged(auth, (user) => {      //Check Firebase user authentication state before mounting
  if (!app) {                             //Mounted and initialize only once if not created
    app = createApp(App)
      .use(router)
      .mount('#app');
  }
  console.log(user ? 'User is logged in:' : 'No user is logged in', user);
});
