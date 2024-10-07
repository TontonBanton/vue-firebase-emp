import { reactive } from 'vue';

export function useEmpForm() {
  const form = reactive({
    employee_id: '',
    name: '',
    dept: '',
    position: '',
  });

  // Populates form with the employee data.
  const populateForm = (emp) => {
    form.employee_id = emp?.empid || '';  // Fallback in case emp is undefined
    form.name = emp?.name || '';
    form.dept = emp?.dept || '';
    form.position = emp?.position || '';
  };

  // Maps Firestore doc data to an employee object with specific fields.
  const mapEmployeeData = doc => ({
    id: doc.id,
    empid: doc.data().employee_id,
    name: doc.data().name,
    dept: doc.data().dept,
    position: doc.data().position,
  });

  return { form, populateForm, mapEmployeeData };
}
