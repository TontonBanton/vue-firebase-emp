<template>
  <div id="view-employee">
    <ul  v-for="employee in employees" :key="employee.id" class="collection with-header" >
      <li class="collection-header"><h4>{{ employee.name }}</h4></li>
      <li class="collection-item">Employee Id: {{ employee.empid }} </li>
      <li class="collection-item">Department: {{ employee.dept }}</li>
      <li class="collection-item">Position: {{ employee.position }} </li>
    </ul>
  </div>
  <router-link to="/" class="btn grey" >Back</router-link>
  <button @click="deleteEmployee" class="btn red" >Delete</button>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import db from './firebaseInit';
import { collection, getDocs, query, where, deleteDoc } from 'firebase/firestore';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
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

const deleteEmployee = async () => {
  const employeeId = route.params.employee_id;
  const employeesQuery = query(collection(db, 'employees'), where('employee_id', '==', employeeId));
  const querySnapshot = await getDocs(employeesQuery);

  querySnapshot.forEach(async doc => {
    await deleteDoc(doc.ref);           // Use deleteDoc to delete the document
    router.push('/');                   // Navigate to the homepage
  });
};


onBeforeMount(fetchData);
</script>