<template>
  <div id="edit-employee">
    <h3>Edit Employee</h3>
    <div class="row">
      <form @submit.prevent="updateEmployee" class="col s12">

        <div class="row">
          <div class="input-field col s12">
            <input disabled ="text" v-model="employee_id" required>
            <label class="active">Employee ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            <label class="active">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="dept" required>
            <label class="active">Department</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required>
            <label class="active">Position</label>
          </div>
        </div>

        <button type="submit" class="btn orange darken-4">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import db from './firebaseInit';
import { collection, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';

import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const employee_id = ref('');
const name = ref('');
const dept = ref('');
const position = ref('');

const fetchData = async () => {
  const employeeId = route.params.employee_id;
  const employeesQuery = query(collection(db, 'employees'), where('employee_id', '==', employeeId));
  const querySnapshot = await getDocs(employeesQuery);

  querySnapshot.forEach(doc => {
    employee_id.value = doc.data().employee_id;
    name.value = doc.data().name;
    dept.value = doc.data().dept;
    position.value = doc.data().position;
  });
};

const updateEmployee = async () => {
  const employeeId = route.params.employee_id;
  const employeesQuery = query(collection(db, 'employees'), where('employee_id', '==', employeeId));
  const querySnapshot = await getDocs(employeesQuery);

  querySnapshot.forEach(async doc => {
    const docRef = doc.ref;
    await updateDoc(docRef, {
      employee_id: employee_id.value,
      name: name.value,
      dept: dept.value,
      position: position.value
    });
    router.push({name: 'view-employee', params: { employee_id: employee_id.value }});
  });
};

onBeforeMount(fetchData);
</script>

<style scoped>
</style>
