<script setup>
const props = defineProps({
  email: String,
  password: String,
  onSubmit: Function,
  isLogin: { type: Boolean, default: false },
});
</script>

<template>

  <!-- <div class="input-field">
    <i class="material-icons prefix">email</i>
    <input type="email" id="email" v-model="email" required>
    <label class="white-text" for="email">Email Address</label>
  </div>
  <div class="input-field">
    <i class="material-icons prefix">lock</i>
    <input type="password" id="password" v-model="password" required>
    <label class="white-text" for="password">Password</label>
  </div>
  <button type="submit" class="btn btn-large btn-extended grey lighten-4 black-text">
    {{ isLogin ? 'Login' : 'Register' }}
  </button> -->

</template>
