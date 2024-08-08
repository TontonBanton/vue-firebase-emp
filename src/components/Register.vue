<template>
<div class="container">
  <div class="row">
  <div class="col s12 m8 offset-m2">

    <div class="login card-panel grey darken-2 white-text center">
      <h3>Register</h3>
      <form @submit.prevent="register">
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
        <button type="submit" class="btn btn-large btn-extended grey lighten-4 black-text">Register</button>
      </form>
    </div>

  </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  try {
    //Creating the fire
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert(`Account created for ${userCredential.user.email}`);
    router.push('/');
  } catch (error) {
    console.error("Error creating user:", error);
    alert(error.message);
  }
};
</script>