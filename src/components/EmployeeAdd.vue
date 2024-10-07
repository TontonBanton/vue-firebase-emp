<script setup>
import FormEmp from './FormEmp.vue';
import { useEmpForm } from '@/composables/useEmpForm'
import { useEmpActions } from '@/composables/useEmpActions'

const { form } = useEmpForm()
const { saveEmployee } = useEmpActions();

</script>

<template>
  <div id="new-employee">
    <h3>New Employee</h3>
    <FormEmp :form="form" :submitAction="saveEmployee" />
  </div>
</template>
