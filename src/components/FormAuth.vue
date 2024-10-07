<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({
  formType: {
    type: String,
    required: true,
  },
});
const formTitle = props.formType === 'register' ? 'Register' : 'Login';
const buttonText = props.formType === 'register' ? 'Register' : 'Login';

const email = ref('');
const password = ref('');

const emit = defineEmits(['submit']);
const handleSubmit = () => {
  emit('submit', { email: email.value, password: password.value });
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="card-panel grey darken-2 white-text center">
          <h3>{{ formTitle }}</h3>
          <form @submit.prevent="handleSubmit">
            <div class="input-field">
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
              {{ buttonText }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


