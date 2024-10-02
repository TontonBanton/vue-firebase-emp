<script setup>
  import { onBeforeMount } from 'vue';
  import { useEmployeeData } from '@/composables/useEmployeeData';
  const { employees, fetchAllEmployees } = useEmployeeData();
  onBeforeMount(fetchAllEmployees);
</script>

<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Employees</h4></li>

      <!-- Loop every employee in employees array dynamic bind employee.id as key -->
      <li v-for="employee in employees" v-bind:key="employee.id" class="collection-item">
        <div class="chip">{{ employee.empid }}</div> {{ employee.name }} : {{employee.dept }}-{{ employee.position }}

        <!-- Route router/index.js name:view-employee, path: '/:employee_id (expecting the employee.empid value) -->
        <router-link :to="{ name: 'view-employee', params: { employee_id: employee.empid }}" class="secondary-content" >
          <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>

    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large orange darken-4">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>


