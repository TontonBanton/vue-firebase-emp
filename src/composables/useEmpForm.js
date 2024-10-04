import { reactive } from 'vue'

export function useEmpForm(){
  const form = reactive({
    employee_id: '',
    name: '',
    dept: '',
    position: '',
  })

  const populateForm = (emp) => {
    form.employee_id = emp?.empid || '';  // using `?.` to handle undefined cases
    form.name = emp?.name || '';
    form.dept = emp?.dept || '';
    form.position = emp?.position || '';
  };

  return { form, populateForm }
}

