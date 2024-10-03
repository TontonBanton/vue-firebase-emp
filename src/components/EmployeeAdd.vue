<script setup>
import EmployeeForm from './EmployeeForm.vue';
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
    <EmployeeForm :empData="empData" @submit="handleSubmit" />
  </div>
</template>
