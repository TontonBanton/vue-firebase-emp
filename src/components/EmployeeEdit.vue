<script setup>
import FormEmp from './FormEmp.vue';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useEmpForm } from '@/composables/useEmpForm'
import { useEmpActions } from '@/composables/useEmpActions'


const route = useRoute();
const routeEmpId = route.params.empid

const { form, populateForm } = useEmpForm()
const { employee, fetchEmployeeById, updateEmployee } = useEmpActions();

const fetchData = async () => {
  await fetchEmployeeById(routeEmpId);
  const fetchedEmployee = employee.value ? employee.value[0] : null; // Access the first element in the array
  if (fetchedEmployee) {
    populateForm(fetchedEmployee);
  } else {
    console.error('No employee data found for the given ID.');
  }
};

onBeforeMount(fetchData);
</script>

<template>
  <div id="edit-employee">
    <h3>Edit Employee</h3>
     <FormEmp :form="form" :isEditing="true" :submitAction="(form) => updateEmployee(routeEmpId, form)" />
  </div>
</template>



