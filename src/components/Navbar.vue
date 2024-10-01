<template>
  <nav>
    <div class="nav-wrapper grey darken-3">
      <div class="container">
        <router-link to="/" class="brand-logo">Employee Manager</router-link>
        <ul class="right">
          <li v-if="isLoggedIn"><span>{{ currentUser }}</span></li>
          <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
          <li v-if="isLoggedIn"><button v-on:click="logout" class="btn orange darken-4">Logout</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted} from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth();

const isLoggedIn = ref(false);
const currentUser = ref(null);

const router = useRouter();

const logout = async () => {
  try {
    await signOut(auth);
    isLoggedIn.value = false;
    currentUser.value = false;
    router.push('/login');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

// onMounted(()=> {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       isLoggedIn.value = true;
//       currentUser.value = user.email;
//     } else {
//       isLoggedIn.value = false;
//       currentUser.value = null;
//     }
//   });
// })

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;                        //Double Negation - converts to boolean
    currentUser.value = user ? user.email : null;     //Ternary ifelse
  });
});

</script>