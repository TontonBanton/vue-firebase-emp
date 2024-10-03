<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
const router = useRouter();

const email = ref('');
const password = ref('');

const login = async () => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    alert(`You are log-in ${userCredential.user.email}`);
    router.push('/');
  } catch (error) {
    console.error("Error creating user:", error);
    alert(error.message);
  }
};
</script>

<template>
<div class="container">
  <div class="row">
  <div class="col s12 m8 offset-m2">

    <div class="login card-panel grey darken-2 white-text center">
      <h3>Login</h3>
      <form @submit.prevent="login">
        <div class="input-field">
          <i class="material-icons prefix">email</i>
          <input type="email" id="email" v-model="email">
          <label class="white-text" for="email">Email Address</label>
        </div>
        <div class="input-field">
          <i class="material-icons prefix">lock</i>
          <input type="password" id="password" v-model="password">
          <label class="white-text" for="password">Password</label>
        </div>
        <button type="submit" class="btn btn-large btn-extended grey lighten-4 black-text">Login</button>
      </form>
    </div>

  </div>
  </div>
</div>
</template>
