<script setup>
import EmployeeForm from './EmployeeForm.vue';
//import { ref } from 'vue';
//import { useRouter } from 'vue-router';
import { useEmpForm } from '@/composables/useEmpForm'
import { useEmpActions } from '@/composables/useEmpActions'

const { form } = useEmpForm()
const { saveEmployee } = useEmpActions();
//const router = useRouter();

// const empData = ref({
//   employee_id: '',
//   name: '',
//   dept: '',
//   position: '',
// });

// const handleSubmit = async () => {
//   await saveEmployee(empData.value);
//   router.push('/');
// };


</script>

<template>
  <div id="new-employee">
    <h3>New Employee</h3>
    <EmployeeForm :form="form" :submitAction="saveEmployee" />
  </div>
</template>
