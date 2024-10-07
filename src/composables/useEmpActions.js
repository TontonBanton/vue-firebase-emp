import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { collection, getDocs, query, where, updateDoc, doc, addDoc, deleteDoc, orderBy } from 'firebase/firestore';
import db from '../config/firebaseInit';

export function useEmpActions() {
  const router = useRouter()
  const employee = ref([]);
  const employees = ref([]);

  // Maps Firestore doc data to an employee object with specific fields.
  const mapEmployeeData = doc => ({
    id: doc.id,
    empid: doc.data().employee_id,
    name: doc.data().name,
    dept: doc.data().dept,
    position: doc.data().position,
  });

  // Fetch all employees
  const fetchAllEmployees = async () => {
    const empQuery = query(collection(db, 'employees'), orderBy('employee_id'));
    const querySnapshot = await getDocs(empQuery);
    employees.value = querySnapshot.docs.map(mapEmployeeData);
  };

  // Fetch employee by ID
  const fetchEmployeeById = async (routeEmpId) => {
    const empQuery = query(collection(db, 'employees'), where('employee_id', '==', routeEmpId));
    const querySnapshot = await getDocs(empQuery);
    employee.value = querySnapshot.docs.map(mapEmployeeData);
  };

  // Save new employee
  const saveEmployee = async (employeeData) => {
    try {
      await addDoc(collection(db, 'employees'), employeeData);
      router.push('/');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  // Update employee
  const updateEmployee = async (routeEmpId, employeeData) => {
    const empQuery = query(collection(db, 'employees'), where('employee_id', '==', routeEmpId));
    const querySnapshot = await getDocs(empQuery);

    querySnapshot.forEach(async doc => {
      const docRef = doc.ref;
      await updateDoc(docRef, employeeData);
    });
    router.push({ name: 'view-employee', params: { empid: routeEmpId } });
  };

  // Delete employee by ID
  const deleteEmployee = async (employeeId) => {
    const empQuery = query(collection(db, 'employees'), where('employee_id', '==', employeeId));
    const querySnapshot = await getDocs(empQuery);
    await Promise.all(querySnapshot.docs.map(async (doc) => {
      await deleteDoc(doc.ref);
    }));
  };

  return {
    employee,
    employees,
    fetchAllEmployees,
    fetchEmployeeById,
    saveEmployee,
    updateEmployee,
    deleteEmployee,
  };
}
