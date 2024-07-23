<template>
  <div id="dashboard">
    <h3>Dashboard</h3>
    <ul>
      <li v-for="employee in employees" :key="employee.id">{{ employee.name }}</li>
    </ul>

    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { collection, getDocs } from 'firebase/firestore';
import db from './firebaseInit';
import { ref, onMounted } from 'vue';

const employees = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'employees'));
  querySnapshot.forEach(doc => {
    employees.value.push({ id: doc.id, ...doc.data() });
  });
});
</script>

<style scoped>
#dashboard {
  padding: 20px;
}
</style>
