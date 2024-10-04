<script setup>
import EmployeeForm from './EmployeeForm.vue';
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useEmpForm } from '@/composables/useEmpForm'
import { useEmpActions } from '@/composables/useEmpActions'


const router = useRouter();
const route = useRoute();
const routeEmpId = route.params.empid

const { form, populateForm } = useEmpForm()
const { employee, fetchEmployeeById, updateEmployee } = useEmpActions();

const fetchData = async () => {
  await fetchEmployeeById(routeEmpId);
  const fetchedEmployee = employee.value ? employee.value[0] : null; // Access the first element in the array
  console.log('Fetched employee:', fetchedEmployee);
  if (fetchedEmployee) {
    populateForm(fetchedEmployee);
  } else {
    console.error('No employee data found for the given ID.');
  }
};

// Update employee data
//const handleUpdate = async () => {
//  await updateEmployee(routeEmpId, empData.value);
// router.push({ name: 'view-employee', params: { empid: routeEmpId } });
//};

onBeforeMount(fetchData);
</script>

<template>
  <div id="edit-employee">
    <h3>Edit Employee</h3>
    <EmployeeForm :form="form" :isEditing="true" :submitAction="(form) => updateEmployee(routeEmpId, form)" />
  </div>
</template>



