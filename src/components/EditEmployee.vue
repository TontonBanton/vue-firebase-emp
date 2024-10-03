<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useEmployeeData } from '../composables/useEmployeeData';

const route = useRoute();
const router = useRouter();
const routeEmpId = route.params.empid
const { employee, fetchEmployeeById, updateEmployee } = useEmployeeData();

const employeeData = ref({
  employee_id: '',
  name: '',
  dept: '',
  position: '',
});

// Fetch employee data when the component is mounted
const fetchData = async () => {
  await fetchEmployeeById(routeEmpId);
  employeeData.value = {
    employee_id: employee.value[0]?.empid || '',
    name: employee.value[0]?.name || '',
    dept: employee.value[0]?.dept || '',
    position: employee.value[0]?.position || '',
  };
};

// Update employee data
const handleUpdate = async () => {
  await updateEmployee(routeEmpId, employeeData.value);
  router.push({ name: 'view-employee', params: { empid: routeEmpId } });
};

onBeforeMount(fetchData);
</script>

<template>
  <div id="edit-employee">
    <h3>Edit Employee</h3>
    <div class="row">
      <form @submit.prevent="handleUpdate" class="col s12">

        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="employeeData.employee_id" required>
            <label class="active">Employee ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employeeData.name" required>
            <label class="active">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employeeData.dept" required>
            <label class="active">Department</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employeeData.position" required>
            <label class="active">Position</label>
          </div>
        </div>

        <button type="submit" class="btn orange darken-4">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>



