import { ref } from 'vue';
import { collection, getDocs, query, orderBy, where, deleteDoc, addDoc } from 'firebase/firestore';
import db from '../config/firebaseInit';

export function useEmployeeData() {
  const employee = ref([]);
  const employees = ref([]);

  // Fetch all employees
  const fetchAllEmployees = async () => {
    const empQuery = query(collection(db, 'employees'), orderBy('employee_id'));
    const querySnapshot = await getDocs(empQuery);
    employees.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      empid: doc.data().employee_id,
      name: doc.data().name,
      dept: doc.data().dept,
      position: doc.data().position,
    }));
  };

  // Fetch employee by ID
  const fetchEmployeeById = async (routeEmpId) => {
    const empQuery = query(collection(db, 'employees'), where('employee_id', '==', routeEmpId));
    const querySnapshot = await getDocs(empQuery);
    employee.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      empid: doc.data().employee_id,
      name: doc.data().name,
      dept: doc.data().dept,
      position: doc.data().position,
    }));
  };

  // Delete employee by ID
  const deleteEmployee = async (routeEmpId) => {
    const empQuery = query(collection(db, 'employees'), where('employee_id', '==', routeEmpId));
    const querySnapshot = await getDocs(empQuery);
    await Promise.all(querySnapshot.docs.map(async (doc) => {
      await deleteDoc(doc.ref);
    }));
  };

  // Save new employee
  const saveEmployee = async (employeeData) => {
    try {
      await addDoc(collection(db, 'employees'), employeeData);
      console.log('Employee added:', employeeData);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return {
    employee,
    employees,
    fetchAllEmployees,
    fetchEmployeeById,
    deleteEmployee,
    saveEmployee,
  };
}
