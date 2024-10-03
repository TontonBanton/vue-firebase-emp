<script setup>
import EmployeeForm from './EmployeeForm.vue';
import { ref, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useEmployeeData } from '../composables/useEmployeeData';

const route = useRoute();
const router = useRouter();
const routeEmpId = route.params.empid
const { employee, fetchEmployeeById, updateEmployee } = useEmployeeData();

const empData = ref({
  employee_id: '',
  name: '',
  dept: '',
  position: '',
});

// Fetch employee data when the component is mounted
const fetchData = async () => {
  await fetchEmployeeById(routeEmpId);
  empData.value = {
    employee_id: employee.value[0]?.empid || '',
    name: employee.value[0]?.name || '',
    dept: employee.value[0]?.dept || '',
    position: employee.value[0]?.position || '',
  };
};

// Update employee data
const handleUpdate = async () => {
  await updateEmployee(routeEmpId, empData.value);
  router.push({ name: 'view-employee', params: { empid: routeEmpId } });
};

onBeforeMount(fetchData);
</script>

<template>
  <div id="edit-employee">
    <h3>Edit Employee</h3>
    <EmployeeForm :empData="empData" :isEditing="true" @submit="handleUpdate" />
  </div>
</template>



