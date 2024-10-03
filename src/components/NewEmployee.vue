<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEmployeeData } from '../composables/useEmployeeData';

const router = useRouter();
const { saveEmployee } = useEmployeeData();

const empData = ref({
  employee_id: '',
  name: '',
  dept: '',
  position: '',
});

const handleSubmit = async () => {
  await saveEmployee(empData.value);
  router.push('/');
};
</script>

<template>
<div id="new-employee">
  <h3>New Employee</h3>
  <div class="row">
    <form @submit.prevent="handleSubmit" class="col s12">

      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="empData.employee_id" required>
          <label>Employee ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="empData.name" required>
          <label>Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="empData.dept" required>
          <label>Department</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="empData.position" required>
          <label>Position</label>
        </div>
      </div>

      <button type="submit" class="btn orange darken-4">Submit</button>
      <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
  </div>
</div>
</template>
