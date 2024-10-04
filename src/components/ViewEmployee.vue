<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';
import { useEmpActions } from '@/composables/useEmpActions'

const route = useRoute();
const router = useRouter();
const routeEmpId = route.params.empid;
const { employee, fetchEmployeeById, deleteEmployee } = useEmpActions();

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
    <ul v-for="empData in employee" :key="empData.id" class="collection with-header" >
      <li class="collection-header"><h4>{{ empData.name }}</h4></li>
      <li class="collection-item">Employee Id: {{ empData.empid }} </li>
      <li class="collection-item">Department: {{ empData.dept }}</li>
      <li class="collection-item">Position: {{ empData.position }} </li>

      <div class="fixed-action-btn">
        <router-link :to="{ name: 'edit-employee', params: { empid: empData.empid }}" class="btn-floating btn-large orange darken-4">
          <i class="fa fa-pencil"></i>
        </router-link>
      </div>
    </ul>
  </div>

  <router-link to="/" class="btn grey" >Back</router-link>
  <button @click="handleDelete" class="btn orange darken-4" >Delete</button>
</template>
