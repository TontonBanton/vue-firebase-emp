import { reactive } from 'vue'

export function useEmpForm(){
  const form = reactive({
    employee_id: '',
    name: '',
    dept: '',
    position: '',
  })

  return { form }
}

