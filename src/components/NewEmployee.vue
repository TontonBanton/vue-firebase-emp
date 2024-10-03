<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEmployeeData } from '../composables/useEmployeeData';

const router = useRouter();
const { saveEmployee } = useEmployeeData(); // Import and use the composable

const employeeData = ref({
  employee_id: '',
  name: '',
  dept: '',
  position: '',
});

const handleSubmit = async () => {
  await saveEmployee(employeeData.value);
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
          <input type="text" v-model="employeeData.employee_id" required>
          <label>Employee ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="employeeData.name" required>
          <label>Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="employeeData.dept" required>
          <label>Department</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="employeeData.position" required>
          <label>Position</label>
        </div>
      </div>

      <button type="submit" class="btn orange darken-4">Submit</button>
      <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
  </div>
</div>
</template>
