import { ref } from 'vue';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import db from '../config/firebaseInit';

export function useEmployeeData() {
  const employees = ref([]);

  const fetchAllEmployees = async () => {
    const employeesQuery = query(collection(db, 'employees'), orderBy('employee_id'));
    const querySnapshot = await getDocs(employeesQuery);
    employees.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      empid: doc.data().employee_id,
      name: doc.data().name,
      dept: doc.data().dept,
      position: doc.data().position,
    }));
  };

  const fetchEmployeeById = async (employeeId) => {
    const employeesQuery = query(collection(db, 'employees'), where('employee_id', '==', employeeId));
    const querySnapshot = await getDocs(employeesQuery);
    employees.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      empid: doc.data().employee_id,
      name: doc.data().name,
      dept: doc.data().dept,
      position: doc.data().position,
    }));
  };

  return {
    employees,
    fetchAllEmployees,
    fetchEmployeeById,
  };
}
