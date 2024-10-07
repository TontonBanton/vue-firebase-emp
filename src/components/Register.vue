<script setup>
import FormAuth from './FormAuth.vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
const router = useRouter();

const register = async ({ email, password }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert(`Account created for ${userCredential.user.email}`);
    router.push('/');
  } catch (error) {
    console.error("Error creating user:", error);
    alert(error.message);
  }
};
</script>

<template>
  <FormAuth formType="register" @submit="register" />
</template>

