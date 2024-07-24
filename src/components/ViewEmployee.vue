<template>
<div id="view-employee">
  <h3>View Employee</h3>
  <ul>
      <li v-for="employee in employees" :key="employee.id">
        <div>{{ employee.name }}</div>
        <div>{{ employee.dept }}</div>
        <div>{{ employee.position }}</div>
        <div>{{ employee.empid }}</div>
      </li>
    </ul>
</div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import db from './firebaseInit';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { useRoute } from 'vue-router';            // Import useRoute
const route = useRoute();                         // Access route parameters

const employees = ref([]);

const fetchData = async () => {
  const employeeId = route.params.employee_id;
  const employeesQuery = query(collection(db, 'employees'), where('employee_id', '==', employeeId)); // query with where to filter by employee_id
  const querySnapshot = await getDocs(employeesQuery); // Fetch documents with the query

  querySnapshot.forEach(doc => {                                                // iterates each document in the employees collection
    const data = {
      'id': doc.id,
      'empid': doc.data().employee_id,
      'name': doc.data().name,
      'dept': doc.data().dept,
      'position': doc.data().position
    }
    employees.value.push(data)
  });
};

onMounted(fetchData);
</script>