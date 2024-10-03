<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';
import { useEmployeeData } from '../composables/useEmployeeData';

const route = useRoute();
const router = useRouter();
const routeEmpId = route.params.empid;
const { employee, fetchEmployeeById, deleteEmployee } = useEmployeeData();

const fetchData = async () => {
  await fetchEmployeeById(routeEmpId);
};
const handleDelete = async () => {
  await deleteEmployee(routeEmpId);
  router.push('/');
};

onBeforeMount(fetchData);
</script>

<template>
  <div id="view-employee">
    <ul v-for="empInfo in employee" :key="employee.id" class="collection with-header" >
      <li class="collection-header"><h4>{{ empInfo.name }}</h4></li>
      <li class="collection-item">Employee Id: {{ empInfo.empid }} </li>
      <li class="collection-item">Department: {{ empInfo.dept }}</li>
      <li class="collection-item">Position: {{ empInfo.position }} </li>

      <div class="fixed-action-btn">
        <router-link :to="{ name: 'edit-employee', params: { empid: empInfo.empid }}" class="btn-floating btn-large orange darken-4">
          <i class="fa fa-pencil"></i>
        </router-link>
      </div>
    </ul>
  </div>

  <router-link to="/" class="btn grey" >Back</router-link>
  <button @click="handleDelete" class="btn orange darken-4" >Delete</button>
</template>
