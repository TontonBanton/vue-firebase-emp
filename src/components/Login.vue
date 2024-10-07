<script setup>
import FormAuth from './FormAuth.vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
const router = useRouter();

const login = async ({ email, password }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert(`You are log-in ${userCredential.user.email}`);
    router.push('/');
  } catch (error) {
    console.error("Error creating user:", error);
    alert(error.message);
  }
};
</script>

<template>
  <FormAuth formType="login" @submit="login" />
</template>
