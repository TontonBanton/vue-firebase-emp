<template>
  <nav>
    <div class="nav-wrapper grey darken-3">
      <div class="container">
        <router-link to="/" class="brand-logo">Employee Manager</router-link>
        <ul class="right">
          <li><router-link to="/">Dashboard</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
          <li><button v-on:click="logout" class="btn orange darken-4">Logout</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth();

const isLoggedIn = ref(false);
const currentUser = ref(false);

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
</script>