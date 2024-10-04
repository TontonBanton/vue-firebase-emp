<script setup>
import EmployeeForm from './EmployeeForm.vue';
import { useEmpForm } from '@/composables/useEmpForm'
import { useEmpActions } from '@/composables/useEmpActions'

const { form } = useEmpForm()
const { saveEmployee } = useEmpActions();
</script>

<template>
  <div id="new-employee">
    <h3>New Employee</h3>
    <EmployeeForm :form="form" :submitAction="saveEmployee" />
  </div>
</template>
